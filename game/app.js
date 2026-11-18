/* 理財人生 · 18 → 28
 * 單頁遊戲，無後台。所有數值來自 03-游戏设计/设定-第一版.md，事件來自 data/events.js。
 */
(() => {
  'use strict';

  /* ── 語言 ── */
  let lang = localStorage.getItem('fl_lang') || 'zh';
  function pickEvents(l) {
    const d = l === 'en' ? window.GAME_EVENTS_EN : window.GAME_EVENTS;
    return (d && d.events) || [];
  }
  let EVENTS = pickEvents(lang);
  const T = () => window.I18N[lang];
  const byId = id => EVENTS.find(e => e.id === id);
  const $ = s => document.querySelector(s);

  // 稱號：存檔一律用中文名做 key，顯示時再按語言譯
  const TITLE_EN = {
    '人生贏家': 'Life Winner',
    '有錢但沒命享': 'Rich but Broken',
    '孤獨的有錢人': 'Rich and Alone',
    '拿健康換回來的快樂': 'Happiness Bought with Health',
    '窮開心': 'Broke but Happy',
    '靠意志力活著': 'Running on Willpower',
    '無債一身輕，但沒勁': 'Debt-Free and Flat',
    '一無所有': 'Nothing Left',
    '普通人': 'Ordinary',
    '逆天改命': 'Against All Odds',
    '全部都想要': 'Wanted Everything',
    '後悔的人生': 'The Life of Regrets',
    '刷了十次也沒用': 'Ten Tries, Still Nothing',
    '只敢欺負簡單模式': 'Easy Mode Only',
    '幸運兒': 'Lucky One',
    '完美的開始': 'Perfect Start',
    '稱號收藏家': 'Title Collector',
  };
  const REGION_EN = { '香港': 'Hong Kong', '九龍': 'Kowloon', '新界': 'New Territories' };
  const regionLabel = r => (lang === 'en' ? (REGION_EN[r] || r) : r);
  const SPEAKER_EN = {
    Housing: 'Landlord', Credit: 'Bank', Investing: 'Friend', Income: 'Boss',
    Health: 'Doctor', Spending: 'Friend', Social: 'Friend', Education: 'School', Tax: 'Tax office',
  };
  const titleLabel = zh => (lang === 'en' ? (TITLE_EN[zh] || zh) : zh);
  const DESC_EN = {
    '人生贏家': 'Money, health, and mood — all three held up. Very few get here.',
    '有錢但沒命享': 'The balance looks great. You have no energy left to spend it.',
    '孤獨的有錢人': 'You kept the money. Keeping it took everyone else away.',
    '拿健康換回來的快樂': 'You had a great time. The medical report has notes.',
    '窮開心': 'Always broke, always laughing louder than anyone else.',
    '靠意志力活著': 'Your body barely held on; your mood did the lifting.',
    '無債一身輕，但沒勁': 'No debt, no worries — and nothing you actually want to do.',
    '一無所有': 'Money, health, mood. None of them stayed.',
    '普通人': 'Like most people: some money, some tiredness, some good days.',
    '逆天改命': 'Ten bad calls in a row, and you still made it to 28.',
    '全部都想要': 'You tried all four routes on the same problem before deciding.',
    '後悔的人生': 'Ten undos in one run. Life has no undo; the game does.',
    '刷了十次也沒用': 'Ten restarts, never 135. Some things are not about repetition.',
    '只敢欺負簡單模式': 'Perfect on Easy, under 60 on Brutal.',
    '幸運兒': 'You scored 135+ on your very first run. Some people never do.',
    '完美的開始': '135 or above. Money, health, and mood all near the top.',
    '稱號收藏家': 'You collected eight or more titles.',
  };
  const ledgerLabel = zh => (lang === 'en' ? (LEDGER_EN[zh] || zh) : zh);
  const LEDGER_EN = {
    '家庭生活費': 'Family allowance',
    '宿舍 / 租金': 'Dorm / rent',
    '伙食 · 交通 · 書簿': 'Food · transport · books',
    '學費': 'Tuition',
    '家庭額外支援': 'Extra family support',
    '月薪': 'Salary',
    '房租': 'Rent',
    '伙食': 'Food',
    '交通': 'Transport',
    '雜項': 'Misc',
    '家用': 'Family contribution',
    '學貸（畢業一次扣）': 'Student loan (one-off at graduation)',
    '負資產利息': 'Interest on debt',
    '借貸還款（本息）': 'Loan repayment (principal + interest)',
    '生活磨損': 'Life wear',
    '學貸支付': 'Paid by student loan',
    '家庭支付': 'Paid by family',
  };
  const titleDesc = (zh, fallback) => (lang === 'en' ? (DESC_EN[zh] || fallback) : fallback);

  // 每個結局帶走嘅一句（唔係描述，係理財反思）
  const LESSON_ZH = {
    '人生贏家': '三樣都保住，唔係靠一次好運，係每一年都揀得準。',
    '有錢但沒命享': '錢買得到最好嘅醫療，買唔返已經蝕咗嘅身體。',
    '孤獨的有錢人': '慳錢唔等於要慳埋同人嘅關係。',
    '拿健康換回來的快樂': '身體係唯一一樣，蝕咗要用更貴嘅價錢買返。',
    '窮開心': '冇錢都可以開心，但唔好當「冇錢」係一種風格。',
    '靠意志力活著': '撐得住係本事，但唔好成日考驗自己嘅底線。',
    '無債一身輕，但沒勁': '唔欠錢係地板，唔係目標。',
    '一無所有': '三樣都可以歸零，而且唔係一次過——係一年一年咁蝕。',
    '普通人': '同大部分人一樣唔係失敗，你仲有得揀。',
    '逆天改命': '十次都揀最差都行到 28 歲，係運氣，唔係策略。',
    '全部都想要': '試晒四條路先決定，係最貴嘅學費，但學到最多。',
    '後悔的人生': '遊戲有反悔，人生冇。',
    '刷了十次也沒用': '重開十次都冇用，問題唔喺次數。',
    '只敢欺負簡單模式': '揀難度都可以係一種逃避。',
    '幸運兒': '第一局就咁好，記住呢個係起點，唔係證明。',
    '完美的開始': '135 分以上，但十年之後仲要再揀。',
    '稱號收藏家': '你收集咗八個人生，每一個都係別人真會行嘅路。',
  };
  const LESSON_EN = {
    '人生贏家': 'Holding all three is not one lucky year — it is choosing well every year.',
    '有錢但沒命享': 'Money buys the best treatment. It cannot buy back the health you already spent.',
    '孤獨的有錢人': 'Saving money should not mean saving on people.',
    '拿健康換回來的快樂': 'Health is the one thing you buy back at a higher price.',
    '窮開心': 'You can be happy without money — just do not make broke your identity.',
    '靠意志力活著': 'Endurance is a skill, not a budget.',
    '無債一身輕，但沒勁': 'Debt-free is a floor, not a goal.',
    '一無所有': 'All three can go to zero — not at once, but year by year.',
    '普通人': 'Being ordinary is not failing. You still have choices.',
    '逆天改命': 'Ten bad calls and you still made it. That is luck, not a strategy.',
    '全部都想要': 'Trying all four routes is the most expensive tuition — and the best lesson.',
    '後悔的人生': 'The game has undo. Life does not.',
    '刷了十次也沒用': 'Restarting ten times did not help. The problem was never the number of tries.',
    '只敢欺負簡單模式': 'Picking the difficulty can be its own kind of avoidance.',
    '幸運兒': 'A great first run is a starting point, not proof.',
    '完美的開始': '135 or above — but ten years later you will choose again.',
    '稱號收藏家': 'Eight lives collected. Each one is a path someone really walks.',
  };

  /* ── 介面文字：套用 data-i18n ── */
  function applyI18n() {
    const t = window.I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (k === 'year') { el.textContent = lang === 'en' ? 'Year' : '第'; return; }
      if (k === 'yearOf') { el.textContent = lang === 'en' ? '/10' : '/10 年'; return; }
      if (typeof t[k] === 'string') el.textContent = t[k];
    });
    const lb = $('#btn-lang');
    if (lb) lb.textContent = lang === 'en' ? '中文' : 'EN';
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant-HK';
  }
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* ────────── 設定（全部可調，改呢度） ────────── */
  const CFG = {
    years: 10,
    uniYears: 4,
    startAge: 18,
    moneyCapScore: 50,        // 錢分上限
    perfectScore: 135,        // 「完美」門檻（普通局理論上限 137，學貸局 92）
    majorChance: 0.65,        // 每局出現一張大事件的機率（最多一張）
    undoForRegret: 10,        // 同一局反悔幾次觸發「後悔的人生」
    salary: 18000,            // 初職月薪
    monthlyCost: [            // 初職每月固定開支（總數 = 17,700，月餘 300）
      ['房租', 7500], ['伙食', 5500], ['交通', 1300], ['雜項', 1400], ['家用', 2000],
    ],
    loanRepay: 60000,         // 有學貸：畢業一次扣
    noLoanYearly: 3000,       // 無學貸：大學每年家庭支援
    uniOverrun: 1200,         // 大學每年開支超出生活費多少（唔好得意，物價會追你）
    wear: {                   // 每年「生活磨損」：唔揀都一樣會老、會攰
      uni:  { health: -1, mood: -1 },
      work: { health: -1, mood: -1 },
    },
    debtRate: 0.05,           // 負資產年息
    debtRepayRate: 0.25,      // 每年要還嘅借貸比例（本息）
    mustYear: { 0: 'housing_01', 4: 'must_first_paycheck', 5: 'tax_02' },
    diff: {
      easy:   { label: '輕鬆', key: 'easy', neg: 0.60 },
      normal: { label: '普通', key: 'normal', neg: 1.00 },
      hard:   { label: '地獄', key: 'hard', neg: 1.35 },
    },
    family: {
      grassroots: { label: '基層', labelEn: 'Working class', money: 1500, health: 72, mood: 60, living: 5000, rent: 3000, desc: '要兼職養自己' },
      middle:     { label: '中產', labelEn: 'Middle class', money: 6000, health: 78, mood: 70, living: 6500, rent: 4000, desc: '父母補貼生活費' },
      rich:       { label: '富裕', labelEn: 'Well-off', money: 20000, health: 84, mood: 75, living: 8000, rent: 5000, desc: '唔使擔心錢' },
    },
    regions: ['香港', '九龍', '新界'],
    speaker: {
      '住屋': '業主', '信用': '銀行', '投資': '朋友', '收入': '老闆', '醫療': '醫生',
      '消費': '朋友', '人情': '朋友', '進修': '學校', '稅務': '稅局',
    },
    sceneBg: {
      city: 'assets/bg-city.svg', street: 'assets/bg-street.svg', room: 'assets/bg-room.svg',
      bank: 'assets/bg-bank.svg', office: 'assets/bg-office.svg', hospital: 'assets/bg-hospital.svg',
      cafe: 'assets/bg-cafe.svg', campus: 'assets/bg-campus.svg',
    },
    endingArt: {
      '人生贏家': 'winner', '有錢但沒命享': 'rich_sick', '孤獨的有錢人': 'rich_lonely',
      '拿健康換回來的快樂': 'health_love', '窮開心': 'poor_happy', '靠意志力活著': 'willpower',
      '無債一身輕，但沒勁': 'debtfree_dull', '一無所有': 'nothing', '普通人': 'ordinary',
      '逆天改命': 'reverse', '全部都想要': 'greedy', '後悔的人生': 'regret',
      '刷了十次也沒用': 'futile', '只敢欺負簡單模式': 'easy_only', '幸運兒': 'lucky',
      '完美的開始': 'perfect', '稱號收藏家': 'collector',
    },
    tagScene: {
      '住屋': 'street', '信用': 'bank', '投資': 'bank', '收入': 'office', '醫療': 'hospital',
      '消費': 'cafe', '人情': 'cafe', '進修': 'campus', '稅務': 'office',
    },
    storeKey: 'fl_run_v1',
    surveyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc3smTVXY90Z4-hDlSflJNnMEtZyS_6AuuPVRfZwGfzwbPGMA/viewform',
  };

  const MATRIX = [
    { m: 'h', h: 'h', f: 'h', name: '人生贏家', desc: '錢、身體、心情三樣都齊，係少數人先做到嘅事。' },
    { m: 'h', h: 'l', f: 'l', name: '有錢但沒命享', desc: '戶口數字好靚，但你已經冇力氣去使。' },
    { m: 'h', h: 'h', f: 'l', name: '孤獨的有錢人', desc: '你守住咗身家，但守住身家嘅過程只剩你一個。' },
    { m: 'h', h: 'l', f: 'h', name: '拿健康換回來的快樂', desc: '你玩得好開心，代價寫在體檢報告上。' },
    { m: 'l', h: 'h', f: 'h', name: '窮開心', desc: '戶口長期見底，但你笑得比誰都大聲。' },
    { m: 'l', h: 'l', f: 'h', name: '靠意志力活著', desc: '身體撐到差少少，心情反而撐住咗你。' },
    { m: 'l', h: 'h', f: 'l', name: '無債一身輕，但沒勁', desc: '你冇欠人錢，亦都冇乜嘢想做。' },
    { m: 'l', h: 'l', f: 'l', name: '一無所有', desc: '錢、身體、心情，一樣都留唔住。' },
    { m: 'm', h: 'm', f: 'm', name: '普通人', desc: '同大部分人一樣：有啲錢，有啲累，有啲開心。' },
  ];

  const SPECIAL = {
    all_bad:  { name: '逆天改命', desc: '十個決定，你每次都揀最差嗰個，竟然都行到 28 歲。' },
    all4:     { name: '全部都想要', desc: '同一個難題，四條路你都試過，才決定點行。' },
    undo10:   { name: '後悔的人生', desc: '同一局你反悔咗十次。人生冇得反悔，遊戲有。' },
    reset10:  { name: '刷了十次也沒用', desc: '你重開咗十次，但從未攞到 145 分。有些事唔係次數問題。' },
    easy:     { name: '只敢欺負簡單模式', desc: '輕鬆模式玩到頂，地獄模式連 60 分都上唔到。' },
    first145: { name: '幸運兒', desc: '第一局就攞到 145 分以上。有些人一生都未遇過一次。' },
    perfect:  { name: '完美的開始', desc: '145 分以上。錢、身體、心情，三樣都企喺高位。' },
    collector:{ name: '稱號收藏家', desc: '你集齊咗八個以上嘅稱號。' },
  };

  const ALL_TITLES = [...MATRIX.map(t => t.name), ...Object.values(SPECIAL).map(s => s.name)];

  /* ────────── 小工具 ────────── */
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rnd = n => Math.floor(Math.random() * n);
  const pick = arr => arr[rnd(arr.length)];
  const money$ = n => (n < 0 ? '−HK$' : 'HK$') + Math.abs(Math.round(n)).toLocaleString('en-HK');
  const signed = n => (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(Math.round(n)).toLocaleString('en-HK');

  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
  }

  /* ────────── 存檔 ────────── */
  const DEFAULT_SAVE = { runs: [], titles: {}, seenSpecial: {}, resets: 0, bestScore: 0, easyBest: 0, hardBest: 0, runCount: 0 };

  function loadSave() {
    try {
      const raw = localStorage.getItem(CFG.storeKey);
      if (!raw) return { ...DEFAULT_SAVE };
      const s = JSON.parse(raw);
      return { ...DEFAULT_SAVE, ...s };
    } catch (e) { return { ...DEFAULT_SAVE }; }
  }
  function writeSave(s) {
    try { localStorage.setItem(CFG.storeKey, JSON.stringify(s)); } catch (e) { /* 私隱模式：忽略 */ }
  }

  let save = loadSave();
  let state = null;
  let difficulty = 'normal';

  /* ────────── 分數 / 結局 ────────── */
  function scoreOf(s) {
    const m = clamp(Math.round(s.money / 1000), 0, CFG.moneyCapScore);
    const h = Math.round(clamp(s.health, 0, 100) / 2);
    const f = Math.round(clamp(s.mood, 0, 100) / 2);
    return { m, h, f, total: m + h + f };
  }

  // 各項分數（0–50）→ 低 / 中 / 高
  const band = v => (v < 20 ? 'l' : v < 35 ? 'm' : 'h');

  function titleFor(s, before) {
    const sc = scoreOf(s);
    const total = sc.total;
    const picked = s.picks;
    const provisionalTitles = new Set(Object.keys(before.titles));
    const provisionalBest = Math.max(before.bestScore, total);
    const easyBest = Math.max(before.easyBest, s.diff === 'easy' ? total : 0);
    const hardBest = Math.max(before.hardBest, s.diff === 'hard' ? total : 0);

    // 先算矩陣，令「收藏家」知道自己會加邊個
    const matrix = matrixTitle(sc);

    // 累積型彩蛋只送一次：拿到之後就變成收藏，唔會再蓋住每個結局
    const seen = before.seenSpecial || {};
    const once = (key, cond) => cond && !seen[key];
    const special = (key, obj) => ({ ...obj, specialKey: key });

    // 優先度：本局發生咩事 > 歷史／收集。越上面越稀有，多個同時符合時攞最高嗰個。
    if (once('all_bad', picked.length === CFG.years && picked.every(p => p.kind === '擺爛')))
      return special('all_bad', SPECIAL.all_bad);
    if (once('all4', Object.values(s.seenOptions).some(list => list.length >= 4)))
      return special('all4', SPECIAL.all4);
    if (s.isFirst && total >= CFG.perfectScore) return SPECIAL.first145;
    if (once('undo10', s.undoCount >= CFG.undoForRegret))
      return special('undo10', SPECIAL.undo10);
    if (total >= CFG.perfectScore) return SPECIAL.perfect;
    if (once('easy', easyBest >= CFG.perfectScore && hardBest > 0 && hardBest <= 60))
      return special('easy', SPECIAL.easy);
    if (once('reset10', before.resets >= 10 && provisionalBest < CFG.perfectScore))
      return special('reset10', SPECIAL.reset10);
    provisionalTitles.add(matrix.name);
    if (once('collector', provisionalTitles.size >= 8)) return special('collector', SPECIAL.collector);
    return matrix;
  }

  function matrixTitle(sc) {
    const b = { m: band(sc.m), h: band(sc.h), f: band(sc.f) };
    const hit = MATRIX.find(t => t.m === b.m && t.h === b.h && t.f === b.f);
    return hit || MATRIX[MATRIX.length - 1];
  }

  /* ────────── 抽一局 ────────── */
  function makePicker(pool, lastTag) {
    const used = new Set();
    return (avoidTag) => {
      let cand = pool.filter(e => !used.has(e.id) && e.tag !== lastTag && e.tag !== avoidTag);
      if (!cand.length) cand = pool.filter(e => !used.has(e.id) && e.tag !== lastTag);
      if (!cand.length) cand = pool.filter(e => !used.has(e.id));
      if (!cand.length) cand = pool;   // 池子抽乾（英文版未齊）就重複抽，唔好回傳 undefined
      const e = pick(cand);
      used.add(e.id);
      lastTag = e.tag;
      return e;
    };
  }

  function buildDeck() {
    const mustIds = new Set(Object.values(CFG.mustYear));
    const uni = EVENTS.filter(e => e.stage === 'uni' && e.kind === 'normal' && !mustIds.has(e.id));
    const work = EVENTS.filter(e => e.stage === 'work' && e.kind === 'normal' && !mustIds.has(e.id));
    const major = EVENTS.filter(e => e.kind === 'major');
    const deck = [];

    const must = id => byId(id) || EVENTS[0];
    deck[0] = must(CFG.mustYear[0]);
    const pickUni = makePicker(uni, deck[0].tag);
    // 第 4 年要避開第 5 年必出事件嘅 tag（否則同 tag 連住兩年）
    const fifthTag = must(CFG.mustYear[CFG.uniYears]).tag;
    for (let i = 1; i < CFG.uniYears; i++) {
      deck[i] = pickUni(i === CFG.uniYears - 1 ? fifthTag : null);
    }

    deck[CFG.uniYears] = must(CFG.mustYear[CFG.uniYears]);
    deck[CFG.uniYears + 1] = must(CFG.mustYear[CFG.uniYears + 1]);

    // 大事件唔係每一世都有：有 65% 機會抽到一張，最多一張
    const majorYear = CFG.uniYears + 2 + rnd(4); // 第 7–10 年
    const hasMajor = Math.random() < CFG.majorChance;
    const pickWork = makePicker(work, deck[CFG.uniYears + 1].tag);
    for (let i = CFG.uniYears + 2; i < CFG.years; i++) {
      deck[i] = (hasMajor && i === majorYear) ? pick(major) : pickWork();
    }
    return deck;
  }

  function rollStart() {
    const boosted = save.resets > 0 && save.resets <= 3;
    const w = boosted
      ? [['grassroots', 25], ['middle', 50], ['rich', 25]]
      : [['grassroots', 45], ['middle', 40], ['rich', 15]];
    let r = Math.random() * 100;
    let family = 'grassroots';
    for (const [k, v] of w) { r -= v; if (r <= 0) { family = k; break; } }
    return {
      family,
      region: pick(CFG.regions),
      loan: Math.random() < 0.5,
    };
  }

  /* ────────── 開新局 ────────── */
  function newRun(start) {
    const fam = CFG.family[start.family];
    state = {
      diff: difficulty,
      isFirst: save.runCount === 0,
      family: start.family,
      region: start.region,
      loan: start.loan,
      money: fam.money,
      health: fam.health,
      mood: fam.mood,
      year: 0,
      deck: buildDeck(),
      picks: [],
      seenOptions: {},
      undoUsed: false,
      undoCount: 0,
      debt: 0,
      debtPaidYear: -1,
      pendingNet: 0,
      snap: null,
      phase: 'event',   // event | outcome | ledger | done
      ledgerData: null,
      finished: false,
      dead: null,
      lastOpt: null,
      lastDelta: null,
    };
    save.resets += 1;
    save.runCount += 1;
    writeSave(save);
    const eb0 = $('#btn-ending-back');
    if (eb0) { eb0.dataset.mode = ''; eb0.disabled = true; eb0.title = ''; }
    const img0 = $('#ending-art');
    if (img0) { img0.removeAttribute('src'); img0.alt = ''; }
    const tl0 = $('#toast');
    if (tl0) tl0.hidden = true;
    renderEvent();
  }

  /* ────────── 畫面切換 ────────── */
  function show(name) {
    $$('.screen').forEach(s => {
      const on = s.dataset.screen === name;
      s.classList.toggle('on', on);
      if (on) s.scrollTop = 0;
    });
  }

  function setBgUrl(url, phase, scene) {
    $('#bg').style.backgroundImage = `url("${url}")`;
    document.body.dataset.phase = phase || '';
    document.body.dataset.scene = scene || '';
  }

  function setBg(scene, phase) {
    const url = CFG.sceneBg[scene] || CFG.sceneBg.street;
    $('#bg').style.backgroundImage = `url("${url}")`;
    document.body.dataset.phase = phase || '';
    document.body.dataset.scene = scene;
  }

  /* ────────── 開始頁 ────────── */
  function renderTitle() {
    setBg('city');
    $('#difficulty').querySelectorAll('button').forEach(b => {
      b.classList.toggle('on', b.dataset.diff === difficulty);
    });
    const t = T();
    const best = save.bestScore || 0;
    const last = save.runs[0];
    const card = $('#title-card');
    if (card) {
      if (last) {
        card.innerHTML = `
          <p class="mini-label">${t.lastRun}</p>
          <p class="mini-title">${titleLabel(last.title)}</p>
          <ul class="mini-kv">
            <li><span>${t.total}</span><b>${last.score} / 150</b></li>
            <li><span>${t.difficulty}</span><b>${CFG.diff[last.diff] ? t[CFG.diff[last.diff].key] : t.normal}</b></li>
            <li><span>${t.playCount}</span><b>${save.runCount} ${t.playedRuns} · ${t.bestScore} ${best} ${t.pts}</b></li>
          </ul>`;
      } else {
        card.innerHTML = `
          <p class="mini-label">${t.howto}</p>
          <ul class="mini-steps">
            <li><i>01</i>${t.step1}</li>
            <li><i>02</i>${t.step2}</li>
            <li><i>03</i>${t.step3}</li>
          </ul>`;
      }
    }
    $('#title-hint').textContent = t.titleHint;
    show('title');
  }

  /* ────────── 開局頁 ────────── */
  function renderStart(start) {
    const t = T();
    const fam = CFG.family[start.family];
    setBg('city');
    $('#start-name').textContent = lang === 'en'
      ? `An 18-year-old student · ${regionLabel(start.region)}`
      : `18 歲${start.region}學生`;
    const kv = [
      [t.region, `${regionLabel(start.region)} · ${start.loan ? t.loan : t.noLoan}`],
      [t.family, lang === 'en' ? fam.labelEn : `${fam.label}（${fam.desc}）`],
      [t.startMoney, money$(fam.money)],
      [t.living, money$(fam.living)],
      [t.tuition, start.loan ? t.loanMode : t.noLoanMode],
    ];
    $('#start-kv').innerHTML = kv.map(([k, v]) => `<li><span class="k">${k}</span><span class="v">${v}</span></li>`).join('');
    $('#btn-enter').textContent = T().enter;
    show('start');
    state = { pendingStart: start };
  }

  /* ────────── 事件頁 ────────── */
  function updateHud() {
    const s = state;
    $('#hud-year').textContent = T().yearOf(s.year + 1, CFG.startAge + s.year);
    $('#stat-money').textContent = money$(s.money);
    $('#stat-score').textContent = scoreOf(s).total;
    $('#stat-year').textContent = s.year + 1;
    const setGauge = (sel, selNum, v) => {
      const bar = $(sel), num = $(selNum);
      bar.style.width = clamp(v, 0, 100) + '%';
      bar.className = v < 30 ? 'low' : v < 55 ? 'mid' : '';
      num.textContent = Math.round(v);
    };
    setGauge('#g-health', '#g-health-num', s.health);
    setGauge('#g-mood', '#g-mood-num', s.mood);
    renderDots();
  }

  function renderDots() {
    const box = $('#dots');
    if (!box) return;
    const y = state.year;
    box.innerHTML = Array.from({ length: CFG.years }, (_, i) =>
      `<i class="${i < y ? 'done' : i === y ? 'now' : ''}"></i>`).join('');
  }

  // 左上角箭頭：遊戲中 = 反悔（揀完先可以用）；結局頁 = 離開
  function setArrow(mode) {
    const b = $('#btn-back');
    if (!b) return;
    b.dataset.mode = mode;
    b.classList.toggle('can-undo', mode === 'undo');
    b.disabled = mode === 'off';
    const t = T();
    b.title = mode === 'undo' ? t.undoTitle : mode === 'leave' ? t.leaveTitle : '';
  }

  function renderEvent() {
    const s = state;
    const ev = s.deck[s.year];
    s.phase = 'event';
    const scene = ev.kind === 'major' ? 'city' : (CFG.tagScene[ev.tag] || 'street');
    setBg(scene, ev.kind === 'major' ? 'major' : (s.year < CFG.uniYears ? 'uni' : 'work'));
    $('#speaker').textContent = lang === 'en'
      ? (SPEAKER_EN[ev.tag] || ev.tag)
      : (CFG.speaker[ev.tag] || ev.tag);
    $('#event-tag').textContent = ev.kind === 'major'
      ? (lang === 'en' ? 'Major event' : '大事件')
      : ev.tag;
    $('#event-text').textContent = ev.text;
    $('#outcome').hidden = true;
    $('#choices').hidden = false;
    setArrow('off');
    updateHud();

    const box = $('#choices');
    box.innerHTML = '';
    ev.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => choose(i));
      box.appendChild(btn);
    });
    show('event');
  }

  function choose(i) {
    const s = state;
    if (s.phase !== 'event') return;
    const ev = s.deck[s.year];
    const opt = ev.options[i];

    s.snap = JSON.parse(JSON.stringify({
      money: s.money, health: s.health, mood: s.mood,
      picks: s.picks, year: s.year, debt: s.debt, debtPaidYear: s.debtPaidYear,
    }));

    if (!s.seenOptions[ev.id]) s.seenOptions[ev.id] = [];
    if (!s.seenOptions[ev.id].includes(i)) s.seenOptions[ev.id].push(i);

    const before = { money: s.money, health: s.health, mood: s.mood };
    const mul = CFG.diff[s.diff].neg;
    const adj = v => (v < 0 ? Math.round(v * mul) : v);

    s.money += adj(opt.effects.money);
    s.health = clamp(s.health + adj(opt.effects.health), 0, 100);
    s.mood = clamp(s.mood + adj(opt.effects.mood), 0, 100);

    const delta = {
      money: s.money - before.money,
      health: s.health - before.health,
      mood: s.mood - before.mood,
    };

    // 擺爛撳出嚟嘅現金當借貸：袋住先，之後要還
    if (opt.kind === '擺爛' && adj(opt.effects.money) > 0) s.debt += adj(opt.effects.money);
    s.picks.push({ id: ev.id, opt: i, kind: opt.kind });
    s.phase = 'outcome';
    s.lastDelta = delta;
    s.lastOpt = opt;

    renderOutcome();
  }

  function renderOutcome() {
    const s = state;
    const d = s.lastDelta;
    $('#choices').hidden = true;
    const out = $('#outcome');
    out.hidden = false;

    const chips = [];
    const chip = (label, v, fmt) => {
      const cls = v > 0 ? 'up' : v < 0 ? 'down' : 'flat';
      chips.push(`<span class="delta ${cls}">${label} ${fmt(v)}</span>`);
    };
    const t = T();
    chip(t.money, d.money, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + 'HK$' + Math.abs(v).toLocaleString('en-HK'));
    chip(t.health, d.health, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v));
    chip(t.mood, d.mood, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v));
    $('#deltas').innerHTML = chips.join('');

    $('#result-text').textContent = s.lastOpt.result;
    $('#outcome').querySelector('.result-actions')?.remove();
    setArrow('undo');

    const actions = document.createElement('div');
    actions.className = 'result-actions';
    const next = document.createElement('button');
    next.className = 'btn primary';
    next.textContent = s.health <= 0 || s.mood <= 0 ? t.seeEnding : t.cont;
    next.addEventListener('click', () => {
      if (s.health <= 0 || s.mood <= 0) return finishRun();
      renderLedger();
    });
    actions.appendChild(next);
    out.appendChild(actions);
    updateHud();
  }

  function doUndo() {
    const s = state;
    if (!s.snap) return;
    s.money = s.snap.money;
    s.health = s.snap.health;
    s.mood = s.snap.mood;
    s.picks = s.snap.picks;
    s.debt = s.snap.debt;
    s.debtPaidYear = s.snap.debtPaidYear;
    s.snap = null;
    s.undoCount += 1;
    s.phase = 'event';
    renderEvent();
  }

  /* ────────── 年度結算 ────────── */
  function renderLedger() {
    const s = state;
    const y = s.year;
    s.phase = 'ledger';
    setBg('room', y < CFG.uniYears ? 'uni' : 'work');
    const lines = [];
    const add = (lab, amt, note) => lines.push({ lab, amt: Math.round(amt), note });

    if (y < CFG.uniYears) {
      const fam = CFG.family[s.family];
      const livingY = fam.living * 12;
      const rentY = fam.rent * 12;
      add('家庭生活費', livingY);
      add('宿舍 / 租金', -rentY);
      // 實際開支比家庭生活費再多一點——物價追唔上，四年書簿冷氣樣樣加
      add('伙食 · 交通 · 書簿', -(livingY - rentY + CFG.uniOverrun));
      add('學費', 0, s.loan ? '學貸支付' : '家庭支付');
      if (!s.loan) add('家庭額外支援', CFG.noLoanYearly);
    } else {
      add('月薪', CFG.salary * 12);
      for (const [lab, v] of CFG.monthlyCost) add(lab, -v * 12);
      if (y === CFG.uniYears && s.loan) add('學貸（畢業一次扣）', -CFG.loanRepay);
    }
    const pre = s.money;
    if (pre < 0) add('負資產利息', -Math.round(Math.abs(pre) * CFG.debtRate));

    if (s.debt > 0 && s.debtPaidYear !== y) {
      const pay = Math.round(s.debt * CFG.debtRepayRate);
      add('借貸還款（本息）', -pay);
      s.debt -= pay;
      s.debtPaidYear = y;
    }

    const wear = y < CFG.uniYears ? CFG.wear.uni : CFG.wear.work;
    lines.push({ lab: '生活磨損', amt: null, wear });

    const net = lines.reduce((a, b) => a + (b.amt || 0), 0);

    $('#ledger-title').textContent = T().annual(y + 1, CFG.startAge + y);
    $('#ledger-lines').innerHTML = lines.map(l => {
      const lab = ledgerLabel(l.lab);
      const note = l.note ? ledgerLabel(l.note) : '';
      if (l.amt === null) {
        return `<li class="wear">
          <span class="lab">${lab}</span>
          <span class="amt bad">${T().health} ${l.wear.health} · ${T().mood} ${l.wear.mood}</span>
        </li>`;
      }
      return `<li>
        <span class="lab">${lab}${note ? `<br><small style="opacity:.7">${note}</small>` : ''}</span>
        <span class="amt ${l.amt > 0 ? 'good' : l.amt < 0 ? 'bad' : ''}">${l.amt > 0 ? '+' : l.amt < 0 ? '−' : ''}${Math.abs(l.amt).toLocaleString('en-HK')}</span>
      </li>`;
    }).join('');

    $('#ledger-net').innerHTML = `${T().yearEnd} <b class="${net > 0 ? 'good' : net < 0 ? 'bad' : 'gold'}">${net > 0 ? '+' : net < 0 ? '−' : ''}HK$${Math.abs(net).toLocaleString('en-HK')}</b>`;

    const hints = lang === 'en' ? {
      loan4: 'Graduation debt: you will be paying this back for years.',
      debt: 'You are in the red. Interest compounds every year.',
      interest: 'Interest is the rent you pay on debt.',
      uni: 'The allowance does not cover real costs — you top it up every year.',
      normal: 'Money leaks slowly. It rarely disappears all at once.',
    } : {
      loan4: '畢業先背債：呢筆錢要之後慢慢喺人工度搵返嚟。',
      debt: '你而家負資產，每年利息會自己滾。',
      interest: '利息係負債嘅租金。',
      uni: '家庭生活費追唔上實際開支，四年都要倒貼少少。',
      normal: '錢係慢慢流走嘅，唔係一次過唔見。',
    };
    let hint = y < CFG.uniYears ? hints.uni : hints.normal;
    if (y === CFG.uniYears && s.loan) hint = hints.loan4;
    else if (pre < 0) hint = hints.interest;
    else if (s.money < 0) hint = hints.debt;
    $('#ledger-hint').textContent = hint;

    $('#btn-ledger-next').textContent = y + 1 >= CFG.years ? T().seeEnding : T().nextYear;
    setArrow('off');
    state.pendingNet = net;
    show('ledger');
  }

  function nextYear() {
    const s = state;
    const oldYear = s.year;
    s.money = Math.round(s.money + s.pendingNet);
    s.pendingNet = 0;
    const wear = oldYear < CFG.uniYears ? CFG.wear.uni : CFG.wear.work;
    s.health = clamp(s.health + wear.health, 0, 100);
    s.mood = clamp(s.mood + wear.mood, 0, 100);
    if (s.health <= 0 || s.mood <= 0) return finishRun();
    s.year += 1;
    if (s.year >= CFG.years) return finishRun();
    renderEvent();
  }

  /* ────────── 結束 ────────── */
  function finishRun() {
    const s = state;
    if (s.finished) return;
    s.finished = true;
    s.phase = 'done';

    // 未走完的年份不再抽，直接按現狀判定
    if (s.health <= 0) s.dead = '身體先撐唔住';
    else if (s.mood <= 0) s.dead = '心情先撐唔住';
    const sc = scoreOf(s);
    const before = JSON.parse(JSON.stringify(save));
    const title = titleFor(s, before);

    const run = {
      title: title.name,
      score: sc.total,
      money: Math.round(s.money),
      health: Math.round(s.health),
      mood: Math.round(s.mood),
      diff: s.diff,
      year: Math.min(s.year + 1, CFG.years),
      date: Date.now(),
    };

    save.runs.unshift(run);
    save.runs = save.runs.slice(0, 10);
    save.titles[title.name] = (save.titles[title.name] || 0) + 1;
    if (title.specialKey) save.seenSpecial[title.specialKey] = 1;
    save.bestScore = Math.max(save.bestScore, sc.total);
    if (s.diff === 'easy') save.easyBest = Math.max(save.easyBest, sc.total);
    if (s.diff === 'hard') save.hardBest = Math.max(save.hardBest, sc.total);
    writeSave(save);

    renderEnding(title, sc);
  }

  function renderEnding(title, sc) {
    const s = state;
    const yearShown = Math.min(s.year + 1, CFG.years);
    const art = CFG.endingArt[title.name] || 'ordinary';
    setBgUrl(`assets/end/${art}.svg`, '', 'end');
    const img = $('#ending-art');
    if (img) { img.src = `assets/end/${art}.svg`; img.alt = title.name; }
    const t = T();
    $('#ending-kicker').textContent = s.dead ? t.stoppedAt(yearShown) : t.endingOf28;
    $('#ending-title').textContent = titleLabel(title.name);
    $('#ending-desc').textContent = titleDesc(title.name, title.desc);
    const lesson = lang === 'en' ? LESSON_EN : LESSON_ZH;
    $('#ending-lesson').textContent = lesson[title.name] || '';

    const kv = [
      [t.total, `${sc.total} / 150`],
      [t.money, money$(s.money)],
      [t.health, `${Math.round(s.health)} / 100`],
      [t.mood, `${Math.round(s.mood)} / 100`],
      [t.difficulty, t[CFG.diff[s.diff].key]],
      [t.endedAt, lang === 'en' ? `Year ${yearShown}` : `第 ${yearShown} 年`],
    ];
    $('#ending-kv').innerHTML = kv.map(([k, v], i) =>
      `<li><span class="k">${k}</span><span class="v ${i === 0 ? 'gold' : ''}">${v}</span></li>`).join('');

    // 解鎖提示 + 稱號收集格
    const got = Object.keys(save.titles);
    const isNew = save.titles[title.name] === 1;
    const ut = $('#unlock-title');
    if (ut) {
      ut.hidden = !isNew;
      ut.innerHTML = isNew
        ? (lang === 'en'
            ? `Title unlocked: <span class="chip-t">${titleLabel(title.name)}</span>`
            : `解鎖稱號！：<span class="chip-t">${titleLabel(title.name)}</span>`)
        : '';
    }
    const uc2 = $('#unlock-count');
    if (uc2) uc2.textContent = `${got.length} / ${ALL_TITLES.length}`;

    const eb = $('#btn-ending-back');
    if (eb) { eb.dataset.mode = 'leave'; eb.disabled = false; eb.title = '離開'; }
    const sb = $('#btn-survey');
    if (sb) {
      if (CFG.surveyUrl) { sb.href = CFG.surveyUrl; sb.hidden = false; }
      else sb.hidden = true;
    }
    drawShareCard(title, sc, yearShown);
    show('ending');
  }

  /* ────────── 畫面切換 ────────── */
  function show(name) {
    $$('.screen').forEach(s => {
      const on = s.dataset.screen === name;
      s.classList.toggle('on', on);
      if (on) s.scrollTop = 0;
    });
  }

  function setBgUrl(url, phase, scene) {
    $('#bg').style.backgroundImage = `url("${url}")`;
    document.body.dataset.phase = phase || '';
    document.body.dataset.scene = scene || '';
  }

  function setBg(scene, phase) {
    const url = CFG.sceneBg[scene] || CFG.sceneBg.street;
    $('#bg').style.backgroundImage = `url("${url}")`;
    document.body.dataset.phase = phase || '';
    document.body.dataset.scene = scene;
  }

  /* ────────── 開始頁 ────────── */
  function renderTitle() {
    setBg('city');
    $('#difficulty').querySelectorAll('button').forEach(b => {
      b.classList.toggle('on', b.dataset.diff === difficulty);
    });
    const t = T();
    const best = save.bestScore || 0;
    const last = save.runs[0];
    const card = $('#title-card');
    if (card) {
      if (last) {
        card.innerHTML = `
          <p class="mini-label">${t.lastRun}</p>
          <p class="mini-title">${titleLabel(last.title)}</p>
          <ul class="mini-kv">
            <li><span>${t.total}</span><b>${last.score} / 150</b></li>
            <li><span>${t.difficulty}</span><b>${CFG.diff[last.diff] ? t[CFG.diff[last.diff].key] : t.normal}</b></li>
            <li><span>${t.playCount}</span><b>${save.runCount} ${t.playedRuns} · ${t.bestScore} ${best} ${t.pts}</b></li>
          </ul>`;
      } else {
        card.innerHTML = `
          <p class="mini-label">${t.howto}</p>
          <ul class="mini-steps">
            <li><i>01</i>${t.step1}</li>
            <li><i>02</i>${t.step2}</li>
            <li><i>03</i>${t.step3}</li>
          </ul>`;
      }
    }
    $('#title-hint').textContent = t.titleHint;
    show('title');
  }

  /* ────────── 開局頁 ────────── */
  function renderStart(start) {
    const t = T();
    const fam = CFG.family[start.family];
    setBg('city');
    $('#start-name').textContent = lang === 'en'
      ? `An 18-year-old student · ${regionLabel(start.region)}`
      : `18 歲${start.region}學生`;
    const kv = [
      [t.region, `${regionLabel(start.region)} · ${start.loan ? t.loan : t.noLoan}`],
      [t.family, lang === 'en' ? fam.labelEn : `${fam.label}（${fam.desc}）`],
      [t.startMoney, money$(fam.money)],
      [t.living, money$(fam.living)],
      [t.tuition, start.loan ? t.loanMode : t.noLoanMode],
    ];
    $('#start-kv').innerHTML = kv.map(([k, v]) => `<li><span class="k">${k}</span><span class="v">${v}</span></li>`).join('');
    $('#btn-enter').textContent = T().enter;
    show('start');
    state = { pendingStart: start };
  }

  /* ────────── 事件頁 ────────── */
  function updateHud() {
    const s = state;
    $('#hud-year').textContent = T().yearOf(s.year + 1, CFG.startAge + s.year);
    $('#stat-money').textContent = money$(s.money);
    $('#stat-score').textContent = scoreOf(s).total;
    $('#stat-year').textContent = s.year + 1;
    const setGauge = (sel, selNum, v) => {
      const bar = $(sel), num = $(selNum);
      bar.style.width = clamp(v, 0, 100) + '%';
      bar.className = v < 30 ? 'low' : v < 55 ? 'mid' : '';
      num.textContent = Math.round(v);
    };
    setGauge('#g-health', '#g-health-num', s.health);
    setGauge('#g-mood', '#g-mood-num', s.mood);
    renderDots();
  }

  function renderDots() {
    const box = $('#dots');
    if (!box) return;
    const y = state.year;
    box.innerHTML = Array.from({ length: CFG.years }, (_, i) =>
      `<i class="${i < y ? 'done' : i === y ? 'now' : ''}"></i>`).join('');
  }

  // 左上角箭頭：遊戲中 = 反悔（揀完先可以用）；結局頁 = 離開
  function setArrow(mode) {
    const b = $('#btn-back');
    if (!b) return;
    b.dataset.mode = mode;
    b.classList.toggle('can-undo', mode === 'undo');
    b.disabled = mode === 'off';
    const t = T();
    b.title = mode === 'undo' ? t.undoTitle : mode === 'leave' ? t.leaveTitle : '';
  }

  function renderEvent() {
    const s = state;
    const ev = s.deck[s.year];
    s.phase = 'event';
    const scene = ev.kind === 'major' ? 'city' : (CFG.tagScene[ev.tag] || 'street');
    setBg(scene, ev.kind === 'major' ? 'major' : (s.year < CFG.uniYears ? 'uni' : 'work'));
    $('#speaker').textContent = lang === 'en'
      ? (SPEAKER_EN[ev.tag] || ev.tag)
      : (CFG.speaker[ev.tag] || ev.tag);
    $('#event-tag').textContent = ev.kind === 'major'
      ? (lang === 'en' ? 'Major event' : '大事件')
      : ev.tag;
    $('#event-text').textContent = ev.text;
    $('#outcome').hidden = true;
    $('#choices').hidden = false;
    setArrow('off');
    updateHud();

    const box = $('#choices');
    box.innerHTML = '';
    ev.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => choose(i));
      box.appendChild(btn);
    });
    show('event');
  }

  function choose(i) {
    const s = state;
    if (s.phase !== 'event') return;
    const ev = s.deck[s.year];
    const opt = ev.options[i];

    s.snap = JSON.parse(JSON.stringify({
      money: s.money, health: s.health, mood: s.mood,
      picks: s.picks, year: s.year, debt: s.debt, debtPaidYear: s.debtPaidYear,
    }));

    if (!s.seenOptions[ev.id]) s.seenOptions[ev.id] = [];
    if (!s.seenOptions[ev.id].includes(i)) s.seenOptions[ev.id].push(i);

    const before = { money: s.money, health: s.health, mood: s.mood };
    const mul = CFG.diff[s.diff].neg;
    const adj = v => (v < 0 ? Math.round(v * mul) : v);

    s.money += adj(opt.effects.money);
    s.health = clamp(s.health + adj(opt.effects.health), 0, 100);
    s.mood = clamp(s.mood + adj(opt.effects.mood), 0, 100);

    const delta = {
      money: s.money - before.money,
      health: s.health - before.health,
      mood: s.mood - before.mood,
    };

    // 擺爛撳出嚟嘅現金當借貸：袋住先，之後要還
    if (opt.kind === '擺爛' && adj(opt.effects.money) > 0) s.debt += adj(opt.effects.money);
    s.picks.push({ id: ev.id, opt: i, kind: opt.kind });
    s.phase = 'outcome';
    s.lastDelta = delta;
    s.lastOpt = opt;

    renderOutcome();
  }

  function renderOutcome() {
    const s = state;
    const d = s.lastDelta;
    $('#choices').hidden = true;
    const out = $('#outcome');
    out.hidden = false;

    const chips = [];
    const chip = (label, v, fmt) => {
      const cls = v > 0 ? 'up' : v < 0 ? 'down' : 'flat';
      chips.push(`<span class="delta ${cls}">${label} ${fmt(v)}</span>`);
    };
    const t = T();
    chip(t.money, d.money, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + 'HK$' + Math.abs(v).toLocaleString('en-HK'));
    chip(t.health, d.health, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v));
    chip(t.mood, d.mood, v => (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v));
    $('#deltas').innerHTML = chips.join('');

    $('#result-text').textContent = s.lastOpt.result;
    $('#outcome').querySelector('.result-actions')?.remove();
    setArrow('undo');

    const actions = document.createElement('div');
    actions.className = 'result-actions';
    const next = document.createElement('button');
    next.className = 'btn primary';
    next.textContent = s.health <= 0 || s.mood <= 0 ? t.seeEnding : t.cont;
    next.addEventListener('click', () => {
      if (s.health <= 0 || s.mood <= 0) return finishRun();
      renderLedger();
    });
    actions.appendChild(next);
    out.appendChild(actions);
    updateHud();
  }

  function doUndo() {
    const s = state;
    if (!s.snap) return;
    s.money = s.snap.money;
    s.health = s.snap.health;
    s.mood = s.snap.mood;
    s.picks = s.snap.picks;
    s.debt = s.snap.debt;
    s.debtPaidYear = s.snap.debtPaidYear;
    s.snap = null;
    s.undoCount += 1;
    s.phase = 'event';
    renderEvent();
  }

  /* ────────── 年度結算 ────────── */
  function renderLedger() {
    const s = state;
    const y = s.year;
    s.phase = 'ledger';
    setBg('room', y < CFG.uniYears ? 'uni' : 'work');
    const lines = [];
    const add = (lab, amt, note) => lines.push({ lab, amt: Math.round(amt), note });

    if (y < CFG.uniYears) {
      const fam = CFG.family[s.family];
      const livingY = fam.living * 12;
      const rentY = fam.rent * 12;
      add('家庭生活費', livingY);
      add('宿舍 / 租金', -rentY);
      // 實際開支比家庭生活費再多一點——物價追唔上，四年書簿冷氣樣樣加
      add('伙食 · 交通 · 書簿', -(livingY - rentY + CFG.uniOverrun));
      add('學費', 0, s.loan ? '學貸支付' : '家庭支付');
      if (!s.loan) add('家庭額外支援', CFG.noLoanYearly);
    } else {
      add('月薪', CFG.salary * 12);
      for (const [lab, v] of CFG.monthlyCost) add(lab, -v * 12);
      if (y === CFG.uniYears && s.loan) add('學貸（畢業一次扣）', -CFG.loanRepay);
    }
    const pre = s.money;
    if (pre < 0) add('負資產利息', -Math.round(Math.abs(pre) * CFG.debtRate));

    if (s.debt > 0 && s.debtPaidYear !== y) {
      const pay = Math.round(s.debt * CFG.debtRepayRate);
      add('借貸還款（本息）', -pay);
      s.debt -= pay;
      s.debtPaidYear = y;
    }

    const wear = y < CFG.uniYears ? CFG.wear.uni : CFG.wear.work;
    lines.push({ lab: '生活磨損', amt: null, wear });

    const net = lines.reduce((a, b) => a + (b.amt || 0), 0);

    $('#ledger-title').textContent = T().annual(y + 1, CFG.startAge + y);
    $('#ledger-lines').innerHTML = lines.map(l => {
      const lab = ledgerLabel(l.lab);
      const note = l.note ? ledgerLabel(l.note) : '';
      if (l.amt === null) {
        return `<li class="wear">
          <span class="lab">${lab}</span>
          <span class="amt bad">${T().health} ${l.wear.health} · ${T().mood} ${l.wear.mood}</span>
        </li>`;
      }
      return `<li>
        <span class="lab">${lab}${note ? `<br><small style="opacity:.7">${note}</small>` : ''}</span>
        <span class="amt ${l.amt > 0 ? 'good' : l.amt < 0 ? 'bad' : ''}">${l.amt > 0 ? '+' : l.amt < 0 ? '−' : ''}${Math.abs(l.amt).toLocaleString('en-HK')}</span>
      </li>`;
    }).join('');

    $('#ledger-net').innerHTML = `${T().yearEnd} <b class="${net > 0 ? 'good' : net < 0 ? 'bad' : 'gold'}">${net > 0 ? '+' : net < 0 ? '−' : ''}HK$${Math.abs(net).toLocaleString('en-HK')}</b>`;

    const hints = lang === 'en' ? {
      loan4: 'Graduation debt: you will be paying this back for years.',
      debt: 'You are in the red. Interest compounds every year.',
      interest: 'Interest is the rent you pay on debt.',
      uni: 'The allowance does not cover real costs — you top it up every year.',
      normal: 'Money leaks slowly. It rarely disappears all at once.',
    } : {
      loan4: '畢業先背債：呢筆錢要之後慢慢喺人工度搵返嚟。',
      debt: '你而家負資產，每年利息會自己滾。',
      interest: '利息係負債嘅租金。',
      uni: '家庭生活費追唔上實際開支，四年都要倒貼少少。',
      normal: '錢係慢慢流走嘅，唔係一次過唔見。',
    };
    let hint = y < CFG.uniYears ? hints.uni : hints.normal;
    if (y === CFG.uniYears && s.loan) hint = hints.loan4;
    else if (pre < 0) hint = hints.interest;
    else if (s.money < 0) hint = hints.debt;
    $('#ledger-hint').textContent = hint;

    $('#btn-ledger-next').textContent = y + 1 >= CFG.years ? T().seeEnding : T().nextYear;
    setArrow('off');
    state.pendingNet = net;
    show('ledger');
  }

  function nextYear() {
    const s = state;
    const oldYear = s.year;
    s.money = Math.round(s.money + s.pendingNet);
    s.pendingNet = 0;
    const wear = oldYear < CFG.uniYears ? CFG.wear.uni : CFG.wear.work;
    s.health = clamp(s.health + wear.health, 0, 100);
    s.mood = clamp(s.mood + wear.mood, 0, 100);
    if (s.health <= 0 || s.mood <= 0) return finishRun();
    s.year += 1;
    if (s.year >= CFG.years) return finishRun();
    renderEvent();
  }

  /* ────────── 結束 ────────── */
  function finishRun() {
    const s = state;
    if (s.finished) return;
    s.finished = true;
    s.phase = 'done';

    // 未走完的年份不再抽，直接按現狀判定
    if (s.health <= 0) s.dead = '身體先撐唔住';
    else if (s.mood <= 0) s.dead = '心情先撐唔住';
    const sc = scoreOf(s);
    const before = JSON.parse(JSON.stringify(save));
    const title = titleFor(s, before);

    const run = {
      title: title.name,
      score: sc.total,
      money: Math.round(s.money),
      health: Math.round(s.health),
      mood: Math.round(s.mood),
      diff: s.diff,
      year: Math.min(s.year + 1, CFG.years),
      date: Date.now(),
    };

    save.runs.unshift(run);
    save.runs = save.runs.slice(0, 10);
    save.titles[title.name] = (save.titles[title.name] || 0) + 1;
    if (title.specialKey) save.seenSpecial[title.specialKey] = 1;
    save.bestScore = Math.max(save.bestScore, sc.total);
    if (s.diff === 'easy') save.easyBest = Math.max(save.easyBest, sc.total);
    if (s.diff === 'hard') save.hardBest = Math.max(save.hardBest, sc.total);
    writeSave(save);

    renderEnding(title, sc);
  }

    /* ────────── 分享卡 ────────── */
  function wrapText(ctx, text, maxW) {
    const chars = Array.from(text);
    const lines = [];
    let line = '';
    for (const ch of chars) {
      if (ctx.measureText(line + ch).width > maxW && line) {
        lines.push(line);
        line = ch;
      } else line += ch;
    }
    if (line) lines.push(line);
    return lines;
  }

  function drawShareCard(title, sc, yearShown) {
    const c = $('#share-canvas');
    const art = CFG.endingArt[title.name] || 'ordinary';
    const img = new Image();
    img.onload = () => drawCardBody(c, title, sc, yearShown, img);
    img.onerror = () => drawCardBody(c, title, sc, yearShown, null);
    img.src = `assets/end/${art}.svg`;
  }

  function drawCardBody(c, title, sc, yearShown, img) {
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    ctx.clearRect(0, 0, W, H);

    // 底：結局圖鋪滿
    ctx.fillStyle = '#05070b';
    ctx.fillRect(0, 0, W, H);
    if (img && img.width) {
      const scale = Math.max(W / img.width, H / img.height);
      const dw = img.width * scale, dh = img.height * scale;
      try { ctx.drawImage(img, (W - dw) / 2, (H - dh) * 0.32, dw, dh); } catch (e) { /* file:// 可能畫唔到 */ }
    }

    // 遮罩：上輕下重，保證字讀得到
    const veil = ctx.createLinearGradient(0, 0, 0, H);
    veil.addColorStop(0, 'rgba(5,7,11,.55)');
    veil.addColorStop(0.42, 'rgba(5,7,11,.42)');
    veil.addColorStop(0.72, 'rgba(5,7,11,.72)');
    veil.addColorStop(1, 'rgba(5,7,11,.9)');
    ctx.fillStyle = veil;
    ctx.fillRect(0, 0, W, H);

    // 金框
    ctx.strokeStyle = 'rgba(232,192,122,.9)';
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, W - 80, H - 80);
    ctx.strokeStyle = 'rgba(3,4,6,.75)';
    ctx.lineWidth = 2;
    ctx.strokeRect(52, 52, W - 104, H - 104);

    const F = (w, size) => `${w} ${size}px "PingFang TC","Hiragino Sans CNS","Noto Sans TC",sans-serif`;
    ctx.textAlign = 'center';

    const t = T();
    ctx.fillStyle = '#e8c07a';
    ctx.font = F('700', 30);
    ctx.fillText(lang === 'en' ? 'M O N E Y   L I F E' : '理 財 人 生', W / 2, 150);
    ctx.fillStyle = 'rgba(246,232,202,.8)';
    ctx.font = F('400', 20);
    ctx.fillText(lang === 'en' ? 'Age 18 → 28 · ten decisions' : '18 歲 → 28 歲 · 十個決定', W / 2, 190);

    // 稱號
    ctx.fillStyle = '#fffaf0';
    let size = 96;
    ctx.font = F('800', size);
    while (ctx.measureText(titleLabel(title.name)).width > W - 220 && size > 28) {
      size -= 4;
      ctx.font = F('800', size);
    }
    ctx.fillText(titleLabel(title.name), W / 2, 330);

    // 描述
    ctx.fillStyle = 'rgba(246,232,202,.9)';
    ctx.font = F('400', 26);
    wrapText(ctx, titleDesc(title.name, title.desc), W - 220).forEach((l, i) => ctx.fillText(l, W / 2, 390 + i * 38));

    // 三項
    const cells = [
      [t.money.toUpperCase(), money$(state.money)],
      [t.health.toUpperCase(), `${Math.round(state.health)}`],
      [t.mood.toUpperCase(), `${Math.round(state.mood)}`],
    ];
    cells.forEach(([k, v], i) => {
      const x = 220 + i * 320;
      ctx.fillStyle = 'rgba(232,192,122,.9)';
      ctx.font = F('700', 21);
      ctx.fillText(k, x, 1128);
      ctx.fillStyle = '#fffaf0';
      ctx.font = F('800', v.length > 8 ? 28 : 36);
      ctx.fillText(v, x, 1176);
    });

    // 總分
    ctx.fillStyle = 'rgba(232,192,122,.9)';
    ctx.font = F('700', 21);
    ctx.fillText(lang === 'en' ? 'T O T A L' : '總 分', W / 2, 640);
    ctx.fillStyle = '#ffd98f';
    ctx.font = F('800', 104);
    ctx.fillText(`${sc.total}`, W / 2, 748);
    ctx.fillStyle = 'rgba(246,232,202,.7)';
    ctx.font = F('400', 22);
    ctx.fillText('/ 150', W / 2, 790);

    // 底部
    ctx.fillStyle = 'rgba(246,232,202,.7)';
    ctx.font = F('400', 21);
    const t2 = T();
    ctx.fillText(lang === 'en'
      ? `${t2.difficulty}: ${t2[CFG.diff[state.diff].key]} · ${yearShown} years played`
      : `難度：${CFG.diff[state.diff].label} · 玩到第 ${yearShown} 年`, W / 2, 1240);
    ctx.fillStyle = '#e8c07a';
    ctx.font = F('700', 26);
    ctx.fillText(lang === 'en' ? 'How would your life go?' : '你嗰個人生會係點？', W / 2, 1288);
  }

  /* ────────── 稱號頁 ────────── */
  function renderTitles() {
    setBg('room', '');
    const got = Object.keys(save.titles);
    const cnt = $('#titles-count');
    if (cnt) cnt.textContent = `${got.length} / ${ALL_TITLES.length}`;
    const draw = (sel, names) => {
      const box = $(sel);
      if (!box) return;
      box.innerHTML = names.map(x => {
        const has = got.includes(x);
        return `<li class="${has ? 'got' : ''}">${has ? titleLabel(x) : '？？？'}</li>`;
      }).join('');
    };
    draw('#titles-normal', MATRIX.map(t => t.name));
    draw('#titles-special', Object.values(SPECIAL).map(sp => sp.name));
    show('titles');
  }

  /* ────────── 記憶頁 ────────── */
  function renderMemory() {
    setBg('room', '');
    const t = T();
    $('#mem-total').textContent = `${save.runCount} ${t.playedRuns}`;
    const runs = save.runs;
    $('#mem-runs').innerHTML = runs.length
      ? runs.map(r => `
        <li>
          <span class="who">${titleLabel(r.title)}</span>
          <span class="meta">${CFG.diff[r.diff] ? t[CFG.diff[r.diff].key] : ''} · ${lang === 'en' ? 'Y' : '第'}${r.year}${lang === 'en' ? '' : '年'}</span>
          <span class="sc">${r.score}</span>
        </li>`).join('')
      : `<li class="mem-empty">${t.emptyRuns}</li>`;

    $('#btn-clear').hidden = Object.keys(save.titles).length === 0;
    show('memory');
  }

  /* ────────── 事件綁定 ────────── */
  function bind() {
    $('#difficulty').addEventListener('click', e => {
      const b = e.target.closest('button');
      if (!b) return;
      difficulty = b.dataset.diff;
      renderTitle();
    });

    $('#btn-start').addEventListener('click', () => {
      renderStart(rollStart());
    });

    $('#btn-reroll').addEventListener('click', () => {
      save.resets += 1;
      writeSave(save);
      renderStart(rollStart());
    });

    $('#btn-enter').addEventListener('click', () => {
      const s = state;
      if (s && s.pendingStart) newRun(s.pendingStart);
    });

    $('#btn-back').addEventListener('click', () => {
      if (!state) return renderTitle();
      if (state.phase === 'outcome') return doUndo();
      // 其餘時刻唔做嘢：箭頭喺遊戲中淨係反悔，冇「中途離開」
    });

    $('#btn-ending-back').addEventListener('click', () => renderTitle());

    $('#btn-ledger-next').addEventListener('click', nextYear);

    $('#btn-again').addEventListener('click', () => renderStart(rollStart()));
    $('#btn-again-memory').addEventListener('click', renderMemory);
    $('#btn-memory').addEventListener('click', renderMemory);
    $('#btn-titles').addEventListener('click', renderTitles);
    $('#btn-titles-back').addEventListener('click', renderTitle);
    $('#btn-ending-titles').addEventListener('click', renderTitles);

    $('#btn-lang').addEventListener('click', () => {
      lang = lang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('fl_lang', lang);
      EVENTS = pickEvents(lang);
      state = null;            // 中途轉語言＝本局作廢
      applyI18n();
      renderTitle();
    });

    $('#btn-back-title').addEventListener('click', renderTitle);

    $('#btn-download').addEventListener('click', () => {
      const a = document.createElement('a');
      a.download = `理財人生-${Date.now()}.png`;
      a.href = $('#share-canvas').toDataURL('image/png');
      a.click();
    });

    $('#btn-copyshare').addEventListener('click', async () => {
      const r = save.runs[0];
      if (!r) return;
      const text = T().shareText({
        title: titleLabel(r.title), score: r.score, money: money$(r.money),
        health: r.health, mood: r.mood,
      });
      try {
        await navigator.clipboard.writeText(text);
        toast(T().copyDone);
      } catch (e) {
        toast(T().copyFail);
      }
    });

    $('#btn-clear').addEventListener('click', () => {
      if (!confirm(T().clearAsk)) return;
      save = { ...DEFAULT_SAVE, runs: [], titles: {} };
      writeSave(save);
      renderMemory();
    });
  }

  /* ────────── 視口兜底 ────────── */
  // 有啲手機瀏覽器（桌面模式、內嵌瀏覽器）唔理 viewport meta，會用 ~980px 佈局，
  // 結果成個遊戲只佔中間一半。呢度按比例放大返，令佢鋪滿螢幕。
  function fixViewport() {
    const vw = window.innerWidth, vh = window.innerHeight;
    const touch = navigator.maxTouchPoints > 0;
    const root = document.documentElement;
    const app = $('#app');
    if (touch && vw > 620) {
      const z = vw / 460;
      root.style.zoom = z.toFixed(3);
      // zoom 之後 100dvh 唔再等於視口高度，要自己算返
      if (app) app.style.height = Math.round(vh / z) + 'px';
    } else {
      root.style.zoom = '';
      if (app) app.style.height = '';
    }
  }

  /* ────────── 啟動 ────────── */
  function boot() {
    applyI18n();
    if (!EVENTS.length) {
      document.body.innerHTML = '<p style="color:#fff;font-family:sans-serif;padding:24px">事件庫讀唔到：data/events.js 冇載入。</p>';
      return;
    }
    fixViewport();
    window.addEventListener('resize', fixViewport);
    bind();
    renderTitle();
  }

  document.addEventListener('DOMContentLoaded', boot);
  if (document.readyState !== 'loading') boot();
})();
