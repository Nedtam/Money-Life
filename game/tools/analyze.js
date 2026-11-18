#!/usr/bin/env node
/**
 * 事件数值体检 —— 合理性 + 分数上限
 *
 *   node tools/analyze.js
 */
const fs = require('fs');
const path = require('path');

global.window = {};
eval(fs.readFileSync(path.join(__dirname, '..', 'data', 'events.js'), 'utf8'));
const EVENTS = window.GAME_EVENTS.events;

const CFG = {
  salary: 18000,
  monthlyCost: 17700,
  noLoanYearly: 3000,
  uniOverrun: 1200,
  loanRepay: 60000,
  debtRate: 0.05,
  wear: { uni: { health: -1, mood: -1 }, work: { health: -1, mood: -1 } },
  moneyCap: 50,
};

const avg = a => a.reduce((x, y) => x + y, 0) / a.length;
const f = n => (n >= 0 ? '+' : '') + Math.round(n).toLocaleString('en-HK');
const pct = (n, d) => (n / d * 100).toFixed(0) + '%';

console.log('═'.repeat(72));
console.log('一、金額尺度（對照設定：uni ±500~2,500／work ±2,000~8,000／major ±5,000~15,000）');
console.log('═'.repeat(72));

const byStage = { uni: [], work: [], major: [] };
EVENTS.forEach(e => {
  const st = e.kind === 'major' ? 'major' : e.stage;
  if (!byStage[st]) byStage[st] = [];
  e.options.forEach(o => byStage[st].push({ id: e.id, tag: e.tag, kind: o.kind, ...o.effects }));
});

const RANGE = { uni: [500, 2500], work: [2000, 8000], major: [5000, 15000] };
for (const [st, arr] of Object.entries(byStage)) {
  if (!arr.length) continue;
  const [lo, hi] = RANGE[st];
  const out = arr.filter(o => Math.abs(o.money) > hi);
  const moneys = arr.map(o => o.money);
  console.log(`\n${st}：${arr.length} 個選項`);
  console.log(`  金額範圍 ${f(Math.min(...moneys))} ~ ${f(Math.max(...moneys))}（設定 ±${lo.toLocaleString()}~${hi.toLocaleString()}）`);
  console.log(`  平均 ${f(avg(moneys))}，中位 ${f(moneys.slice().sort((a, b) => a - b)[Math.floor(moneys.length / 2)])}`);
  if (out.length) console.log(`  ⚠ 超出上限 ${out.length} 個：`, out.map(o => `${o.id}(${f(o.money)})`).join(', '));
}

console.log('\n' + '═'.repeat(72));
console.log('二、健康 / 心情（設定要求 −15 ~ +15）');
console.log('═'.repeat(72));
const allOpts = EVENTS.flatMap(e => e.options);
const hs = allOpts.map(o => o.effects.health), ms = allOpts.map(o => o.effects.mood);
console.log(`健康：${Math.min(...hs)} ~ ${Math.max(...hs)}，平均 ${avg(hs).toFixed(2)}`);
console.log(`心情：${Math.min(...ms)} ~ ${Math.max(...ms)}，平均 ${avg(ms).toFixed(2)}`);
console.log(`健康負值選項 ${pct(hs.filter(x => x < 0).length, hs.length)}｜心情負值選項 ${pct(ms.filter(x => x < 0).length, ms.length)}`);
const bad = allOpts.filter(o => Math.abs(o.effects.health) > 15 || Math.abs(o.effects.mood) > 15);
if (bad.length) console.log('⚠ 超範圍：', bad.map(o => o.label).join(', '));

console.log('\n' + '═'.repeat(72));
console.log('三、有冇「一定揀呢個」嘅選項（一項唔差過其他、至少一項更好）');
console.log('═'.repeat(72));
let dominated = 0;
EVENTS.forEach(e => {
  const score = o => o.effects.money / 1000 + o.effects.health * 0.5 + o.effects.mood * 0.5;
  e.options.forEach((a, i) => {
    const others = e.options.filter((_, j) => j !== i);
    const isBest = others.every(b => score(a) >= score(b));
    if (isBest) {
      dominated++;
      console.log(`  ${e.id}：「${a.label}」全面贏（分 ${score(a).toFixed(1)} vs ${others.map(b => score(b).toFixed(1)).join('/')}）`);
    }
  });
});
if (!dominated) console.log('  冇：每個事件都真係有取捨。');
else console.log(`  共 ${dominated} 個事件有一個「明顯最好」嘅選項 — 呢啲事件冇真正嘅取捨。`);

console.log('\n' + '═'.repeat(72));
console.log('四、一局 10 個事件嘅分數上下限（窮舉 4^10，富裕+無學貸 / 基層+有學貸）');
console.log('═'.repeat(72));

function buildDeck() {
  const must = new Set(Object.values({ 0: 'housing_01', 4: 'must_first_paycheck', 5: 'tax_02' }));
  const uni = EVENTS.filter(e => e.stage === 'uni' && e.kind === 'normal' && !must.has(e.id));
  const work = EVENTS.filter(e => e.stage === 'work' && e.kind === 'normal' && !must.has(e.id));
  const major = EVENTS.filter(e => e.kind === 'major');
  const sh = a => a.slice().sort(() => Math.random() - 0.5);
  const u = sh(uni), w = sh(work);
  const byId = id => EVENTS.find(e => e.id === id);
  const deck = [byId('housing_01'), u[0], u[1], u[2], byId('must_first_paycheck'), byId('tax_02')];
  const majorYear = 6 + Math.floor(Math.random() * 4);
  const hasMajor = Math.random() < 0.65;
  for (let i = 6; i < 10; i++) deck.push((hasMajor && i === majorYear) ? major[Math.floor(Math.random() * major.length)] : w.pop());
  deck.hasMajor = hasMajor;
  return deck;
}

function score(money, health, mood) {
  const m = Math.max(0, Math.min(CFG.moneyCap, Math.round(money / 1000)));
  const h = Math.round(Math.max(0, Math.min(100, health)) / 2);
  const f2 = Math.round(Math.max(0, Math.min(100, mood)) / 2);
  return { m, h, f: f2, total: m + h + f2 };
}

function runDeck(deck, startMoney, startH, startM, loan) {
  let best = -1, worst = 999, bestCut = null, worstCut = null;
  const idx = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let n = 0; n < 4 ** 10; n++) {
    let k = n;
    for (let y = 0; y < 10; y++) { idx[y] = k & 3; k >>= 2; }
    let money = startMoney, h = startH, m = startM, debt = 0;
    for (let y = 0; y < 10; y++) {
      const o = deck[y].options[idx[y]];
      money += o.effects.money;
      if (o.kind === '擺爛' && o.effects.money > 0) debt += o.effects.money;
      h = Math.min(100, Math.max(0, h + o.effects.health));
      m = Math.min(100, Math.max(0, m + o.effects.mood));
      const w = y < 4 ? CFG.wear.uni : CFG.wear.work;
      h = Math.min(100, Math.max(0, h + w.health));
      m = Math.min(100, Math.max(0, m + w.mood));
      money += y < 4 ? (loan ? 0 : CFG.noLoanYearly) : (CFG.salary - CFG.monthlyCost) * 12;
      if (y < 4) money -= CFG.uniOverrun;
      if (y === 4 && loan) money -= CFG.loanRepay;
      if (debt > 0) { const pay = Math.round(debt * 0.25); money -= pay; debt -= pay; }
      if (money < 0) money -= Math.round(Math.abs(money) * CFG.debtRate);
    }
    const s = score(money, h, m);
    if (s.total > best) { best = s.total; bestCut = { money: Math.round(money), h: Math.round(h), m: Math.round(m) }; }
    if (s.total < worst) { worst = s.total; worstCut = { money: Math.round(money), h: Math.round(h), m: Math.round(m) }; }
  }
  return { best, worst, bestCut, worstCut };
}

for (const [label, money, h, m, loan] of [
  ['富裕 + 無學貸', 20000, 84, 75, false],
  ['基層 + 有學貸', 1500, 72, 60, true],
]) {
  const withMajor = [], noMajor = [];
  for (let t = 0; t < 12; t++) {
    const deck = buildDeck();
    const r = runDeck(deck, money, h, m, loan);
    (deck.hasMajor ? withMajor : noMajor).push(r);
  }
  const show = (arr, name) => {
    if (!arr.length) return;
    console.log(`  ${name}（${arr.length} 局）：最好 ${arr.map(r => r.best).join('/')}　最差 ${arr.map(r => r.worst).join('/')}`);
  };
  console.log(`\n${label}：`);
  show(withMajor, '有大型事件');
  show(noMajor, '冇大型事件');
  const all = [...withMajor, ...noMajor];
  console.log(`  → 最好平均 ${Math.round(avg(all.map(r => r.best)))}，最差平均 ${Math.round(avg(all.map(r => r.worst)))}`);
}

console.log('\n' + '═'.repeat(72));
console.log('五、結論');
console.log('═'.repeat(72));

/* ── 隨機亂揀 1000 局，睇分數分佈 ── */
console.log('\n' + '═'.repeat(72));
console.log('六、隨機亂揀 1000 局的分數分佈（富裕+無學貸）');
console.log('═'.repeat(72));
{
  const must = new Set(['housing_01', 'must_first_paycheck', 'tax_02']);
  const uni = EVENTS.filter(e => e.stage === 'uni' && e.kind === 'normal' && !must.has(e.id));
  const work = EVENTS.filter(e => e.stage === 'work' && e.kind === 'normal' && !must.has(e.id));
  const major = EVENTS.filter(e => e.kind === 'major');
  const byId = id => EVENTS.find(e => e.id === id);
  const totals = [];
  for (let t = 0; t < 1000; t++) {
    const sh = a => a.slice().sort(() => Math.random() - 0.5);
    const u = sh(uni), w = sh(work);
    const deck = [byId('housing_01'), u[0], u[1], u[2], byId('must_first_paycheck'), byId('tax_02')];
    const hasMajor = Math.random() < 0.65;
    const majorYear = 6 + Math.floor(Math.random() * 4);
    for (let i = 6; i < 10; i++) deck.push((hasMajor && i === majorYear) ? major[Math.floor(Math.random() * major.length)] : w.pop());
    let money = 20000, h = 84, m = 75, debt = 0;
    for (let y = 0; y < 10; y++) {
      const o = deck[y].options[Math.floor(Math.random() * 4)];
      money += o.effects.money;
      if (o.kind === '擺爛' && o.effects.money > 0) debt += o.effects.money;
      h = Math.min(100, Math.max(0, h + o.effects.health));
      m = Math.min(100, Math.max(0, m + o.effects.mood));
      h = Math.min(100, Math.max(0, h - 1));
      m = Math.min(100, Math.max(0, m - 1));
      money += y < 4 ? CFG.noLoanYearly : (CFG.salary - CFG.monthlyCost) * 12;
      if (y < 4) money -= CFG.uniOverrun;
      if (debt > 0) { const pay = Math.round(debt * 0.25); money -= pay; debt -= pay; }
      if (money < 0) money -= Math.round(Math.abs(money) * CFG.debtRate);
    }
    totals.push(score(money, h, m).total);
  }
  totals.sort((a, b) => a - b);
  const q = p => totals[Math.floor(totals.length * p)];
  console.log(`  中位 ${q(0.5)}｜10% ${q(0.1)}｜90% ${q(0.9)}｜最高 ${totals[totals.length - 1]}｜最低 ${totals[0]}`);
  console.log(`  分佈：<60 ${pct(totals.filter(x => x < 60).length, 1000)}｜60–89 ${pct(totals.filter(x => x >= 60 && x < 90).length, 1000)}｜90–119 ${pct(totals.filter(x => x >= 90 && x < 120).length, 1000)}｜120–149 ${pct(totals.filter(x => x >= 120 && x < 150).length, 1000)}｜150 ${pct(totals.filter(x => x === 150).length, 1000)}`);
}
