#!/usr/bin/env node
/**
 * 运行逻辑验证 —— 逐条对照 运行逻辑.md
 *
 * 用法：
 *   cd 07-游戏
 *   npm i playwright-core      # 只需要一次
 *   node tests/run-tests.js
 *
 * 需要本机装了 Google Chrome。脚本会自己起一个静态服务器（端口 8137），跑完关掉。
 */
const { chromium } = require('playwright-core');
const { spawn } = require('child_process');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PORT = 8137;
const URL = `http://127.0.0.1:${PORT}/index.html`;
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const results = [];
const check = (name, ok, detail) => results.push({ name, ok: !!ok, detail: detail === undefined ? '' : String(detail) });

/* ── 頁面操作 ── */
const hud = page => page.evaluate(() => ({
  money: parseInt(document.querySelector('#stat-money').textContent.replace(/[^0-9-]/g, ''), 10) *
    (document.querySelector('#stat-money').textContent.includes('−') ? -1 : 1),
  health: parseInt(document.querySelector('#g-health-num').textContent, 10),
  mood: parseInt(document.querySelector('#g-mood-num').textContent, 10),
  year: document.querySelector('#hud-year').textContent,
  score: parseInt(document.querySelector('#stat-score').textContent, 10),
}));

const currentEvent = page => page.evaluate(() => {
  const text = document.querySelector('#event-text').textContent;
  const ev = window.GAME_EVENTS.events.find(e => e.text === text);
  return ev ? { id: ev.id, tag: ev.tag, stage: ev.stage, kind: ev.kind, options: ev.options.map(o => o.effects) } : null;
});

const arrowState = page => page.evaluate(() => {
  const b = document.querySelector('#btn-back');
  return { visible: !b.hidden, disabled: b.disabled, canUndo: b.classList.contains('can-undo') };
});

const readLedger = page => page.evaluate(() => {
  const lines = [...document.querySelectorAll('#ledger-lines li')].map(li => li.innerText.replace(/\n/g, ' '));
  const netText = document.querySelector('#ledger-net').innerText;
  const net = parseInt(netText.replace(/[^0-9]/g, ''), 10) * (netText.includes('−') ? -1 : 1);
  const wear = document.querySelector('#ledger-lines li.wear')?.innerText || '';
  return { lines, net, wear };
});

const pickOption = async (page, idx) => {
  // 直接 dispatch，避開入場動畫未穩定時 Playwright 的等待
  await page.evaluate(i => {
    const els = document.querySelectorAll('.choice');
    if (els[i]) els[i].click();
  }, idx);
  await page.waitForTimeout(150);
};

const clickContinue = async page => {
  await page.evaluate(() => {
    const b = document.querySelector('#outcome .btn.primary');
    if (b) b.click();
  });
  await page.waitForTimeout(150);
};

const isEnding = page => page.isVisible('[data-screen="ending"].on');
const isLedger = page => page.isVisible('[data-screen="ledger"].on');

/** 一路玩到結束，返回每年記錄 */
async function playThrough(page, strategy = () => 0) {
  const log = [];
  for (let guard = 0; guard < 80; guard++) {
    if (await isEnding(page)) break;
    if (await isLedger(page)) {
      log.push({ ledger: await readLedger(page), before: await page.evaluate(() => document.querySelector('#ledger-title').textContent) });
      const last = (await page.textContent('#btn-ledger-next')).includes('睇結局');
      await page.click('#btn-ledger-next');
      await page.waitForTimeout(120);
      if (last) break;
      continue;
    }
    if (await page.isVisible('#outcome .btn.primary')) { await clickContinue(page); continue; }
    if (await page.isVisible('.choice')) {
      const ev = await currentEvent(page);
      const h = await hud(page);
      log.push({ year: h.year, event: ev, before: h });
      await pickOption(page, strategy(ev, h));
      continue;
    }
    break;
  }
  return log;
}

(async () => {
  const server = spawn('python3', ['-m', 'http.server', String(PORT)], { cwd: ROOT, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 800));
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });

  const newPage = async (w = 390, h = 844) => {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    const errs = [];
    page.on('pageerror', e => errs.push(e.message));
    page.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await page.goto(URL, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);
    page.__errs = errs;
    page.__ctx = ctx;
    return page;
  };
  const closePage = async page => { await page.__ctx.close(); };
  const startRun = async page => {
    await page.click('#btn-start');
    await page.waitForTimeout(120);
    await page.click('#btn-enter');
    await page.waitForTimeout(180);
  };

  /* ═══ 1. 開局 ═══ */
  {
    const page = await newPage();
    const seen = [];
    for (const fam of ['基層', '中產', '富裕']) {
      await page.evaluate((fam) => {
        // 連續重抽直到抽到指定家庭（最多 60 次）
        for (let i = 0; i < 60; i++) {
          document.querySelector('#btn-start').click();
          const kv = document.querySelector('#start-kv').innerText;
          if (kv.includes('家庭經濟') && kv.includes(fam)) { document.querySelector('#btn-enter').click(); return; }
          document.querySelector('#btn-reroll').click();
        }
      }, fam);
      await page.waitForTimeout(200);
      seen.push({ fam, ...(await hud(page)) });
      // 重開
      await page.evaluate(() => localStorage.clear());
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(150);
    }
    const expect = { '基層': [1500, 72, 60], '中產': [6000, 78, 70], '富裕': [20000, 84, 75] };
    seen.forEach(s => {
      const [m, h, f] = expect[s.fam];
      check(`1.1 起始數值 ${s.fam}`, s.money === m && s.health === h && s.mood === f,
        `實際 money=${s.money} health=${s.health} mood=${s.mood}，預期 ${m}/${h}/${f}`);
    });
    await closePage(page);
  }

  /* ═══ 2. 事件抽取（跑 3 局，驗證結構規則） ═══ */
  {
    const page = await newPage();
    for (let run = 0; run < 3; run++) {
      await page.evaluate(() => localStorage.clear());
      await page.reload({ waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(120);
      await page.click('#btn-start');
      await page.click('#btn-enter');
      const log = await playThrough(page, () => Math.floor(Math.random() * 4));
      const evs = log.filter(l => l.event).map(l => l.event);
      const ids = evs.map(e => e.id);

      if (run === 0) {
        check('2.1 第 1 年必出 housing_01', ids[0] === 'housing_01', ids[0]);
        check('2.2 第 5 年必出 must_first_paycheck', ids[4] === 'must_first_paycheck', ids[4]);
        check('2.3 第 6 年必出 tax_02', ids[5] === 'tax_02', ids[5]);
        check('2.4 共 10 個事件', ids.length === 10, `${ids.length} 個`);
        check('2.5 事件不重複', new Set(ids).size === ids.length, ids.join(','));
        const majors = evs.map((e, i) => ({ e, i })).filter(x => x.e.kind === 'major');
        check('2.6 大事件 0 或 1 個', majors.length <= 1, `${majors.length} 個`);
        check('2.6b 大事件落在第 7–10 年', majors.every(x => x.i >= 6), majors.map(x => x.i + 1).join(','));
        check('2.7 第 1–4 年都是大學事件',
          evs.slice(0, 4).every(e => e.stage === 'uni' || e.id === 'housing_01'), evs.slice(0, 4).map(e => e.stage).join(','));
        check('2.8 第 7–10 年都是初職事件',
          evs.slice(6).every(e => e.stage === 'work'), evs.slice(6).map(e => e.stage).join(','));
        // 同 tag 不連續（大學段 + 初職段普通事件）
        let consecutive = false;
        for (let i = 1; i < evs.length; i++) {
          if (evs[i].kind === 'major' || evs[i - 1].kind === 'major') continue;
          if (evs[i].tag === evs[i - 1].tag) consecutive = true;
        }
        check('2.9 同 tag 不連續（大事件年除外）', !consecutive, evs.map(e => e.tag).join('>'));
      }
    }
    await closePage(page);
  }

  /* ═══ 3. 選擇生效 / clamp ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);
    for (let i = 0; i < 3; i++) {
      const ev = await currentEvent(page);
      const before = await hud(page);
      const idx = i % 4;
      await pickOption(page, idx);
      const after = await hud(page);
      const ef = ev.options[idx];
      check(`3.${i + 1} 選項效果正確（${ev.id} 選 ${idx}）`,
        after.money - before.money === ef.money &&
        after.health === Math.max(0, Math.min(100, before.health + ef.health)) &&
        after.mood === Math.max(0, Math.min(100, before.mood + ef.mood)),
        `錢 ${after.money - before.money}/${ef.money} 健康 ${after.health}/${before.health + ef.health} 心情 ${after.mood}/${before.mood + ef.mood}`);
      await clickContinue(page);
      if (await isLedger(page)) { await page.click('#btn-ledger-next'); await page.waitForTimeout(120); }
    }
    await closePage(page);
  }

  /* ═══ 4. 反悔 / 箭頭 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);

    const a0 = await arrowState(page);
    check('4.1 事件頁箭頭停用', a0.disabled === true, JSON.stringify(a0));

    const before = await hud(page);
    await pickOption(page, 0);
    const a1 = await arrowState(page);
    check('4.2 結果頁箭頭可反悔（金色）', a1.canUndo && !a1.disabled, JSON.stringify(a1));

    await page.click('#btn-back');
    await page.waitForTimeout(150);
    const back = await hud(page);
    check('4.3 反悔後數值回滾', back.money === before.money && back.health === before.health && back.mood === before.mood,
      `${JSON.stringify(back)} vs ${JSON.stringify(before)}`);
    const a2 = await arrowState(page);
    check('4.4 反悔後箭頭恢復停用', a2.disabled === true && !a2.canUndo, JSON.stringify(a2));

    await pickOption(page, 1);
    const a3 = await arrowState(page);
    check('4.5 反悔之後可以再反悔（無限次）', a3.canUndo && !a3.disabled, JSON.stringify(a3));

    await page.click('#btn-back');
    await page.waitForTimeout(150);
    const b2 = await hud(page);
    check('4.6 第二次反悔都回到原狀', b2.money === before.money && b2.health === before.health && b2.mood === before.mood,
      `反悔後 ${JSON.stringify(b2)}，選擇前 ${JSON.stringify(before)}`);

    // 結局頁箭頭 = 離開
    await clickContinue(page);
    await playThrough(page, () => 0);
    check('4.7 已到結局頁', await isEnding(page), '');
    const aEnd = await page.evaluate(() => {
      const b = document.querySelector('#btn-ending-back');
      return { disabled: b.disabled, mode: b.dataset.mode };
    });
    check('4.8 結局頁箭頭 = 離開且可點', !aEnd.disabled && aEnd.mode === 'leave', JSON.stringify(aEnd));
    await page.click('#btn-ending-back');
    await page.waitForTimeout(150);
    check('4.9 結局頁箭頭回到開始頁', await page.isVisible('[data-screen="title"].on'), '');
    await closePage(page);
  }

  /* ═══ 4c. 跨局狀態唔應該帶去下一局 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    await startRun(page);

    // 第一局：每個事件都反悔一次（10 次），但每個事件只試兩個選項（唔觸發「全部都想要」）
    for (let y = 0; y < 10; y++) {
      if (await isEnding(page)) break;
      if (await page.isVisible('.choice')) {
        await pickOption(page, 0);
        await page.evaluate(() => document.querySelector('#btn-back').click());
        await page.waitForTimeout(140);
        await pickOption(page, 1);
        await clickContinue(page);
        if (await isLedger(page)) {
          const last = (await page.textContent('#btn-ledger-next')).includes('睇結局');
          await page.evaluate(() => document.querySelector('#btn-ledger-next').click());
          await page.waitForTimeout(140);
          if (last) break;
        }
        continue;
      }
      break;
    }
    const t1 = await page.evaluate(() => document.querySelector('#ending-title')?.textContent);
    check('4.11 第一局反悔十次 → 後悔的人生', t1 === '後悔的人生', t1);

    // 第二局：完全唔反悔
    await page.evaluate(() => document.querySelector('#btn-again').click());
    await page.waitForTimeout(250);
    await page.evaluate(() => document.querySelector('#btn-start').click());
    await page.waitForTimeout(180);
    await page.evaluate(() => document.querySelector('#btn-enter').click());
    await page.waitForTimeout(300);
    const arrow = await page.evaluate(() => ({
      disabled: document.querySelector('#btn-back').disabled,
      cls: document.querySelector('#btn-back').className,
      endMode: document.querySelector('#btn-ending-back').dataset.mode,
      art: document.querySelector('#ending-art').getAttribute('src'),
    }));
    check('4.12 第二局箭頭冇殘留（禁用、冇 can-undo）', arrow.disabled === true && !arrow.cls.includes('can-undo'), JSON.stringify(arrow));
    check('4.13 第二局結局頁箭頭／插圖已清空', !arrow.endMode && !arrow.art, JSON.stringify(arrow));

    await playThrough(page, () => 0);
    const t2 = await page.evaluate(() => document.querySelector('#ending-title')?.textContent);
    check('4.14 第二局冇反悔 → 唔會誤觸發「後悔的人生」', t2 !== '後悔的人生', t2);

    await closePage(page);
  }

  /* ═══ 4b. 「全部都想要」：同一事件試齊四條路 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    await startRun(page);
    for (let i = 0; i < 4; i++) {
      await pickOption(page, i);
      await page.waitForTimeout(150);
      if (i < 3) { await page.click('#btn-back'); await page.waitForTimeout(220); }
    }
    await page.waitForTimeout(150);
    if (await page.isVisible('#outcome .btn.primary')) await clickContinue(page);
    await playThrough(page, () => 0);
    const title = await page.evaluate(() => document.querySelector('#ending-title').textContent);
    check('4.10 同一事件試齊四條路 → 全部都想要', title === '全部都想要', title);
    await closePage(page);
  }

  /* ═══ 5. 年度結算（兩種學費模式各跑一局） ═══ */
  for (const wantLoan of [false, true]) {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    await page.click('#btn-start');
    let mode = '';
    for (let i = 0; i < 60; i++) {
      mode = await page.textContent('#start-kv');
      if (wantLoan ? mode.includes('學貸支付') : mode.includes('家庭支付')) break;
      await page.click('#btn-reroll');
      await page.waitForTimeout(60);
    }
    check(`5.0 抽到${wantLoan ? '有' : '無'}學貸局`, wantLoan ? mode.includes('學貸支付') : mode.includes('家庭支付'), mode.replace(/\n/g, ' ').slice(0, 40));
    await page.click('#btn-enter');
    await page.waitForTimeout(180);

    const label = wantLoan ? '有學貸' : '無學貸';
    const seen = new Set();
    for (let guard = 0; guard < 40; guard++) {
      if (await isEnding(page)) break;
      if (await page.isVisible('.choice')) { await pickOption(page, 0); continue; }
      if (await page.isVisible('#outcome .btn.primary')) {
        const hBefore = await hud(page);
        const yearNum = parseInt(hBefore.year.match(/第 (\d+) 年/)[1], 10);
        await clickContinue(page);
        if (!(await isLedger(page))) break;
        const led = await readLedger(page);
        const isUni = yearNum <= 4;
        const expBase = isUni ? (wantLoan ? -1200 : 1800) : (yearNum === 5 && wantLoan ? -56400 : 3600);
        // 負資產利息係額外一行，要由帳目自己讀返出嚟
        const iLine = led.lines.find(l => l.includes('負資產利息'));
        const interest = iLine ? -parseInt(iLine.replace(/[^0-9]/g, ''), 10) : 0;
        if (yearNum <= 6) {
          check(`5.1 ${label} 第 ${yearNum} 年淨額 = ${expBase}${interest ? ' + 利息 ' + interest : ''}`,
            led.net === expBase + interest, `實際 ${led.net}`);
        }
        if (yearNum <= 6 && !seen.has('wear' + yearNum)) {
          seen.add('wear' + yearNum);
          const wearExp = '-1';
          check(`5.2 ${label} 第 ${yearNum} 年磨損標示（${wearExp}）`,
            led.wear.includes('健康') && led.wear.includes(wearExp), led.wear.replace(/\n/g, ' '));
        }
        if (wantLoan && yearNum === 5) {
          check('5.3 學貸帳目寫明 60,000', led.lines.some(l => l.includes('學貸') && l.includes('60,000')), led.lines.join(' | '));
        }
        await page.click('#btn-ledger-next');
        await page.waitForTimeout(150);
        if (await isEnding(page)) break;
        const hAfter = await hud(page);
        const wearH = -1;
        check(`5.4 ${label} 第 ${yearNum} 年磨損實際扣健康`,
          hAfter.health === Math.max(0, Math.min(100, hBefore.health + wearH)),
          `${hBefore.health} → ${hAfter.health}（預期 ${wearH}）`);
        if (yearNum >= 6) break;
        continue;
      }
      break;
    }
    await closePage(page);
  }

  /* ═══ 6. 分數公式 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);
    const h = await hud(page);
    check('6.1 初始分數 = 錢分+健康分+心情分',
      h.score === Math.min(50, Math.max(0, Math.round(h.money / 1000))) + Math.round(h.health / 2) + Math.round(h.mood / 2),
      `分數 ${h.score}`);
    await closePage(page);
  }

  /* ═══ 7. 存檔 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);
    await playThrough(page, () => 0);
    const s1 = await page.evaluate(() => JSON.parse(localStorage.getItem('fl_run_v1')));
    check('7.1 一局後 runs 有 1 條', s1.runs.length === 1, `${s1.runs.length}`);
    check('7.2 稱號有記數', Object.keys(s1.titles).length >= 1, JSON.stringify(s1.titles));
    check('7.3 resets 有計', s1.resets >= 1, `${s1.resets}`);
    check('7.4 runCount 有計', s1.runCount >= 1, `${s1.runCount}`);
    const y = s1.runs[0].year;
    check('7.5 記錄年份 ≤ 10', y <= 10, `${y}`);
    await closePage(page);
  }

  /* ═══ 8. 第 10 年顯示 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);
    await playThrough(page, () => 0);
    const kv = await page.evaluate(() => document.querySelector('#ending-kv').innerText);
    check('8.1 結局頁寫第 10 年（唔會變 11）', kv.includes('第 10 年') || kv.includes('第 4 年'), kv.replace(/\n/g, ' '));
    await closePage(page);
  }

  /* ═══ 9. 死亡（修改事件數據令健康必死） ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await page.evaluate(() => {
      window.GAME_EVENTS.events.forEach(e => e.options.forEach(o => { o.effects.health = -25; }));
    });
    await startRun(page);
    const state = () => page.evaluate(() => {
      const on = document.querySelector('.screen.on');
      const choices = document.querySelector('#choices');
      const out = document.querySelector('#outcome');
      return {
        screen: on ? on.dataset.screen : null,
        choicesShown: choices ? getComputedStyle(choices).display !== 'none' : false,
        outcomeShown: out ? !out.hidden : false,
        outcomeBtn: out && !out.hidden ? (out.querySelector('.btn.primary') || {}).textContent : null,
        health: parseInt(document.querySelector('#g-health-num').textContent, 10),
      };
    });
    let deathAt = null;
    for (let i = 0; i < 60; i++) {
      const st = await state();
      if (st.screen === 'ending') break;
      if (st.screen === 'ledger') { await page.evaluate(() => document.querySelector('#btn-ledger-next').click()); await page.waitForTimeout(120); continue; }
      if (st.outcomeShown) {
        if ((st.outcomeBtn || '').includes('睇結局') && !deathAt) deathAt = st.health;
        await page.evaluate(() => document.querySelector('#outcome .btn.primary').click());
        await page.waitForTimeout(120);
        continue;
      }
      if (st.choicesShown) {
        await page.evaluate(() => document.querySelectorAll('.choice')[0].click());
        await page.waitForTimeout(120);
        continue;
      }
      break;
    }
    const end = await page.evaluate(() => ({
      kicker: document.querySelector('#ending-kicker').textContent,
      kv: document.querySelector('#ending-kv').innerText.replace(/\n/g, ' | '),
      screen: document.querySelector('.screen.on').dataset.screen,
    }));
    check('9.1 健康歸零即刻結束', end.screen === 'ending' && /健康 \| 0 \/ 100/.test(end.kv), end.kv);
    check('9.2 死亡時結局頁寫「人生停喺呢度」', end.kicker.includes('人生停喺呢度'), end.kicker);
    await closePage(page);
  }

  /* ═══ 10. 頁面錯誤 ═══ */
  {
    const page = await newPage();
    await page.evaluate(() => localStorage.clear());
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(120);
    await startRun(page);
    await playThrough(page, () => 0);
    check('10.1 全程冇 JS 錯誤', page.__errs.length === 0, page.__errs.join(' | '));
    await closePage(page);
  }

  await browser.close();
  server.kill();

  /* ── 輸出 ── */
  const pass = results.filter(r => r.ok).length;
  console.log('\n運行邏輯驗證\n' + '─'.repeat(70));
  results.forEach(r => {
    console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? '  ·  ' + r.detail : ''}`);
  });
  console.log('─'.repeat(70));
  console.log(`${pass}/${results.length} 通過` + (pass === results.length ? ' ✅' : ' ❌'));
  process.exit(pass === results.length ? 0 : 1);
})().catch(e => {
  console.error('測試腳本出錯：', e);
  process.exit(2);
});
