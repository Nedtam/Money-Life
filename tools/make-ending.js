#!/usr/bin/env node
/**
 * 生成结局插图（每个称号一张）
 *
 *   npm run ending  → 写出 assets/end/*.svg
 *
 * 同一套画法、不同参数：天空、天体、城市密度、地面、天气。
 */
const fs = require('fs');
const path = require('path');

const W = 1080, H = 1920;
const OUT = path.join(__dirname, '..', 'assets', 'end');

let seed = 424242;
let rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const rect = (x, y, w, h, fill, extra = '') =>
  `<rect x="${Math.round(x)}" y="${Math.round(y)}" width="${Math.round(w)}" height="${Math.round(h)}" fill="${fill}"${extra}/>`;

/* ── 17 個結局嘅畫面參數 ── */
const ART = {
  // 錢、健康、心情三樣都高：日出，金橙天，遠景樓，風箏
  winner:        { sky: ['#2a1a3a', '#8a4a5a', '#ffb06a', '#ffe0a0'], horizon: 0.78, orb: 'sun', city: 'sparse', ground: '#3a2a22', weather: 'clear', birds: true },
  // 有錢但沒命享：冷白病房窗口，月亮，稀疏樓
  rich_sick:     { sky: ['#070a12', '#101a2e', '#1d2c46', '#2a3c5a'], horizon: 0.7, orb: 'moon', city: 'far', ground: '#1a2230', weather: 'none' },
  // 孤獨的有錢人：深夜天台，滿城燈但一個人都冇
  rich_lonely:   { sky: ['#060a16', '#0c1630', '#152248', '#1e2e5c'], horizon: 0.7, orb: 'moon', city: 'dense', ground: '#121a2c', weather: 'none', lone: true },
  // 拿健康換回來的快樂：霓虹派對，但人企唔穩
  health_love:   { sky: ['#0a0612', '#22103a', '#4a1a52', '#8a2a5a'], horizon: 0.72, orb: 'none', city: 'dense', ground: '#1a1020', weather: 'none', neon: true },
  // 窮開心：黃昏街頭，暖色，人
  poor_happy:    { sky: ['#1a1420', '#4a2a3a', '#c06a4a', '#f0a878'], horizon: 0.72, orb: 'sun', city: 'sparse', ground: '#2a2018', weather: 'clear' },
  // 靠意志力活著：灰藍雨天，樓
  willpower:     { sky: ['#0a0e16', '#16202e', '#243246', '#38485c'], horizon: 0.74, orb: 'none', city: 'far', ground: '#161c26', weather: 'rain' },
  // 無債一身輕，但沒勁：灰綠，平靜
  debtfree_dull: { sky: ['#0c1210', '#16201c', '#222e28', '#33443a'], horizon: 0.76, orb: 'none', city: 'far', ground: '#141a16', weather: 'none' },
  // 一無所有：雨夜，空街
  nothing:       { sky: ['#04060a', '#080c14', '#0e141e', '#141c28'], horizon: 0.78, orb: 'none', city: 'sparse', ground: '#0a0e14', weather: 'rain' },
  // 普通人：日常黃昏
  ordinary:      { sky: ['#121826', '#2a3048', '#5a5a72', '#8a8290'], horizon: 0.72, orb: 'sun', city: 'far', ground: '#1a1e28', weather: 'none' },
  // 逆天改命：火紅天，反差
  reverse:       { sky: ['#140408', '#3a0a12', '#8a1a20', '#e0503a'], horizon: 0.7, orb: 'sun', city: 'far', ground: '#22101a', weather: 'none', birds: true },
  // 全部都想要：四色天空
  greedy:        { sky: ['#0a0e20', '#20184a', '#4a2a6a', '#8a5a8a'], horizon: 0.7, orb: 'moon', city: 'dense', ground: '#161226', weather: 'none', neon: true },
  // 後悔的人生：倒帶感，暗紫
  regret:        { sky: ['#0a0812', '#1a1428', '#2e2440', '#443858'], horizon: 0.74, orb: 'moon', city: 'far', ground: '#12101c', weather: 'rain' },
  // 刷了十次也沒用：灰到冇色
  futile:        { sky: ['#0a0a0c', '#141416', '#1e1e22', '#2a2a30'], horizon: 0.76, orb: 'none', city: 'sparse', ground: '#0e0e12', weather: 'none' },
  // 只敢欺負簡單模式：綠色，安全
  easy_only:     { sky: ['#08120e', '#12241c', '#1e3a2c', '#2e5440'], horizon: 0.72, orb: 'sun', city: 'sparse', ground: '#0e1a16', weather: 'clear' },
  // 幸運兒：滿天流星
  lucky:         { sky: ['#0a0a24', '#1a1a44', '#3a2a6a', '#6a4a9a'], horizon: 0.7, orb: 'moon', city: 'far', ground: '#141030', weather: 'stars' },
  // 完美的開始：金光
  perfect:       { sky: ['#1a1024', '#4a2438', '#c07a4a', '#ffe0a0'], horizon: 0.78, orb: 'sun', city: 'dense', ground: '#3a2418', weather: 'clear', birds: true },
  // 稱號收藏家：好多小燈
  collector:     { sky: ['#0a0a1a', '#141432', '#24244a', '#3a3a6a'], horizon: 0.7, orb: 'moon', city: 'dense', ground: '#101020', weather: 'stars' },
};

function defs(sky) {
  return `<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${sky[0]}"/>
    <stop offset="0.42" stop-color="${sky[1]}"/>
    <stop offset="0.72" stop-color="${sky[2]}"/>
    <stop offset="1" stop-color="${sky[3]}"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff3d0" stop-opacity=".5"/>
    <stop offset="1" stop-color="#fff3d0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000" stop-opacity=".05"/>
    <stop offset="1" stop-color="#000" stop-opacity=".55"/>
  </linearGradient>
</defs>`;
}

function art(cfg) {
  const horizonY = H * cfg.horizon;
  let s = rect(0, 0, W, H, 'url(#sky)');

  // 城市剪影
  const density = { sparse: 8, far: 16, dense: 26 }[cfg.city] || 12;
  const shades = ['#0b1226', '#0d1630', '#101a3a'];
  for (let i = 0; i < density; i++) {
    const w = int(40, 150);
    const x = int(-40, W);
    const top = horizonY - int(60, cfg.city === 'dense' ? 620 : 340);
    const body = shades[i % shades.length];
    s += rect(x, top, w, horizonY - top + 10, body);
    // 窗
    const cols = Math.max(1, Math.floor((w - 12) / 24));
    const rows = Math.max(1, Math.floor((horizonY - top - 20) / 34));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rnd() > (cfg.city === 'dense' ? 0.4 : 0.26)) continue;
        const warm = ['#ffcf7a', '#ffb066', '#ffe6b0', '#9fe0ff'][int(0, 3)];
        s += rect(x + 8 + c * 24, top + 16 + r * 34, 8, 12, warm);
      }
    }
  }

  // 地面：色塊 + 漸變 + 地平線反光
  s += rect(0, horizonY, W, H - horizonY, cfg.ground);
  s += rect(0, horizonY, W, H - horizonY, 'url(#ground)');
  s += rect(0, horizonY - 3, W, 6, 'rgba(255,205,130,.22)');
  s += rect(0, horizonY + 6, W, 14, 'rgba(255,205,130,.06)');
  // 街道橫紋
  for (let y = horizonY + 70; y < H; y += 80) s += rect(0, y, W, 3, 'rgba(255,255,255,.025)');

  // 天體
  if (cfg.orb === 'sun') {
    const cx = 830, cy = horizonY - 640;
    s += `<circle cx="${cx}" cy="${cy}" r="300" fill="url(#glow)"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="86" fill="#ffd9a0"/>`;
  } else if (cfg.orb === 'moon') {
    const cx = 230, cy = 380;
    s += `<circle cx="${cx}" cy="${cy}" r="240" fill="url(#glow)"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="70" fill="#f2ecd0"/>`;
    s += `<circle cx="${cx - 22}" cy="${cy - 14}" r="62" fill="${cfg.sky[1]}" opacity=".75"/>`;
  }

  // 星 / 流星
  if (cfg.weather === 'stars') {
    for (let i = 0; i < 90; i++) {
      s += rect(int(0, W), int(0, horizonY - 80), 4, 4, `rgba(230,235,255,${(0.25 + rnd() * 0.5).toFixed(2)})`);
    }
    for (let i = 0; i < 5; i++) {
      const x = int(80, W - 200), y = int(120, horizonY - 300);
      s += `<path d="M${x} ${y} l80 -46" stroke="rgba(255,240,200,.55)" stroke-width="4"/>`;
    }
  }
  if (cfg.weather === 'rain') {
    for (let i = 0; i < 130; i++) {
      const x = int(0, W), y = int(0, H);
      s += `<path d="M${x} ${y} l-7 22" stroke="rgba(170,200,255,.16)" stroke-width="3"/>`;
    }
  }

  // 霓虹
  if (cfg.neon) {
    for (let i = 0; i < 9; i++) {
      const x = int(40, W - 160), y = int(horizonY - 520, horizonY - 120);
      const col = ['#ff5f8a', '#5fe0c0', '#ffd06a', '#8a7aff'][int(0, 3)];
      s += rect(x, y, int(40, 110), 10, col, ' opacity=".85"');
      s += rect(x, y + 22, int(24, 70), 8, col, ' opacity=".5"');
    }
  }

  // 一個人的剪影
  if (cfg.lone) {
    const bx = W / 2, by = horizonY + 60;
    s += `<ellipse cx="${bx}" cy="${by}" rx="46" ry="7" fill="rgba(0,0,0,.35)"/>`;
    s += rect(bx - 22, by - 96, 44, 96, '#080b16');
    s += `<circle cx="${bx}" cy="${by - 118}" r="26" fill="#080b16"/>`;
  }

  // 鳥
  if (cfg.birds) {
    for (let i = 0; i < 5; i++) {
      const x = int(120, W - 120), y = int(200, horizonY - 320);
      s += `<path d="M${x} ${y} q10 -10 20 0 q10 -10 20 0" stroke="rgba(20,16,24,.6)" stroke-width="4" fill="none"/>`;
    }
  }

  return defs(cfg.sky) + s;
}

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
for (const [name, cfg] of Object.entries(ART)) {
  seed = 424242 + [...name].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 99991, 7); // 每個結局固定但唔同嘅種子
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">${art(cfg)}</svg>`;
  fs.writeFileSync(path.join(OUT, name + '.svg'), svg);
  console.log(name, Math.round(svg.length / 1024) + 'KB');
}
