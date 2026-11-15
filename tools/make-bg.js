#!/usr/bin/env node
/**
 * 生成像素风背景（SVG）
 *
 *   npm run bg      → 写出 assets/bg-city.svg / bg-room.svg / bg-street.svg
 *
 * 纯矢量、无外部素材、无版权问题。宽 1080 × 高 1920（9:16）。
 */
const fs = require('fs');
const path = require('path');

const W = 1080, H = 1920;
const OUT = path.join(__dirname, '..', 'assets');

// 固定种子，确保每次生成一致
let seed = 20261107;
const rnd = () => {
  seed = (seed * 1103515245 + 12345) & 0x7fffffff;
  return seed / 0x7fffffff;
};
const pick = arr => arr[Math.floor(rnd() * arr.length)];
const int = (a, b) => a + Math.floor(rnd() * (b - a + 1));

const rect = (x, y, w, h, fill, extra = '') =>
  `<rect x="${Math.round(x)}" y="${Math.round(y)}" width="${Math.round(w)}" height="${Math.round(h)}" fill="${fill}"${extra}/>`;

/* 一棟樓 + 窗 */
function tower(x, w, top, bottom, body, winColors, density = 0.45, cell = 1, outline = null) {
  let s = rect(x, top, w, bottom - top, body);
  if (outline) s += `<rect x="${x}" y="${top}" width="${w}" height="${bottom - top}" fill="none" stroke="${outline}" stroke-width="4"/>`;
  const ww = 10 * cell, wh = 14 * cell, gx = 26 * cell, gy = 32 * cell;
  const cols = Math.max(1, Math.floor((w - 20 * cell) / gx));
  const rows = Math.max(1, Math.floor((bottom - top - 30 * cell) / gy));
  const offX = x + (w - cols * gx) / 2 + (gx - ww) / 2;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rnd() > density) continue;
      const col = pick(winColors);
      s += rect(offX + c * gx, top + 24 * cell + r * gy, ww, wh, col);
    }
  }
  return s;
}

/* 樓頂剪影（水塔、天線） */
function roofProps(x, w, top, color) {
  let s = '';
  const n = int(0, 2);
  for (let i = 0; i < n; i++) {
    const px = x + int(6, w - 30);
    s += rect(px, top - int(14, 40), int(8, 18), 40, color);
  }
  return s;
}

function defs() {
  return `<defs>
  <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#232a63"/>
    <stop offset="0.38" stop-color="#4a3f7d"/>
    <stop offset="0.66" stop-color="#9a5a6e"/>
    <stop offset="0.86" stop-color="#e08a58"/>
    <stop offset="1" stop-color="#f2b06a"/>
  </linearGradient>
  <linearGradient id="day" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7fb4e6"/>
    <stop offset="0.5" stop-color="#bcd9f2"/>
    <stop offset="1" stop-color="#e9f1f9"/>
  </linearGradient>
  <linearGradient id="night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#070b1c"/>
    <stop offset="0.55" stop-color="#111a3c"/>
    <stop offset="1" stop-color="#1d2a55"/>
  </linearGradient>
  <linearGradient id="lamp" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffd98a" stop-opacity=".55"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffe3a0" stop-opacity=".45"/>
    <stop offset="1" stop-color="#ffe3a0" stop-opacity="0"/>
  </radialGradient>
</defs>`;
}

/* ── 城市天際線 ── */
function city() {
  let s = rect(0, 0, W, H, 'url(#dusk)');
  // 遠處樓群
  for (let i = 0; i < 30; i++) {
    const w = int(70, 150), x = int(-40, W);
    const top = int(520, 820);
    s += rect(x, top, w, 1600 - top, '#2a3268');
  }
  for (let i = 0; i < 22; i++) {
    const w = int(90, 170), x = int(-40, W);
    const top = int(700, 1020);
    s += tower(x, w, top, 1700, '#181f4a', ['#ffcf7a', '#ff9e5e', '#ffe6b0'], 0.55, 1);
  }
  // 前景樓
  for (let i = 0; i < 6; i++) {
    const w = int(200, 300), x = -60 + i * 200;
    const top = int(980, 1200);
    s += roofProps(x, w, top, '#0d1330');
    s += tower(x, w, top, 1920, '#0d1330', ['#ffd88a', '#ffb066', '#9fe0ff'], 0.6, 1);
  }
  // 街道
  s += rect(0, 1540, W, 380, '#0d1226');
  s += rect(0, 1540, W, 10, '#3a4478');
  for (let x = 40; x < W; x += 140) s += rect(x, 1700, 70, 10, '#6b7398');
  // 路燈
  for (const lx of [120, 640, 940]) {
    s += rect(lx, 1300, 12, 260, '#0e1730');
    s += rect(lx - 30, 1286, 70, 16, '#0e1730');
    s += `<rect x="${lx - 28}" y="1294" width="66" height="8" fill="#ffd98a"/>`;
    s += `<circle cx="${lx + 5}" cy="1320" r="110" fill="url(#glow)"/>`;
  }
  // 雲
  for (let i = 0; i < 8; i++) {
    const cx = int(0, W), cy = int(300, 900), w = int(120, 300);
    s += rect(cx, cy, w, 18, 'rgba(160,170,220,.12)');
    s += rect(cx + 30, cy - 16, w * 0.6, 16, 'rgba(160,170,220,.10)');
  }
  return defs() + s;
}

/* ── 房間：窗邊看夜景 ── */
function room() {
  let s = rect(0, 0, W, H, '#0c1530');
  // 牆面磚
  for (let y = 0; y < 1300; y += 90) {
    for (let x = (y / 90) % 2 ? 45 : 0; x < W; x += 90) {
      s += rect(x + 2, y + 2, 86, 86, '#101a3a');
    }
  }
  // 窗
  const wx = 150, wy = 220, ww = 780, wh = 780;
  s += rect(wx - 20, wy - 20, ww + 40, wh + 40, '#1b2a58');
  s += rect(wx, wy, ww, wh, 'url(#night)');
  // 窗外城市
  for (let i = 0; i < 16; i++) {
    const x = wx + int(0, ww - 80), bw = int(50, 110), top = wy + int(220, 480);
    s += rect(x, top, bw, wy + wh - top, '#0a122c');
    for (let k = 0; k < 6; k++) {
      if (rnd() > 0.5) continue;
      s += rect(x + 10 + (k % 3) * 26, top + 20 + Math.floor(k / 3) * 34, 10, 14, pick(['#ffcf7a', '#9fe0ff', '#ff9e5e']));
    }
  }
  // 窗框
  s += rect(wx + ww / 2 - 8, wy, 16, wh, '#1b2a58');
  s += rect(wx, wy + wh / 2 - 8, ww, 16, '#1b2a58');
  for (let i = 0; i < 3; i++) s += rect(wx - 20, wy + 120 + i * 220, 20, 14, '#243264');
  // 窗光落在地上
  s += rect(wx, wy + wh + 20, ww, 120, 'rgba(255,217,138,.06)');
  // 桌子
  s += rect(0, 1240, W, 40, '#4a3726');
  s += rect(0, 1280, W, 60, '#34251a');
  s += rect(0, 1340, W, 580, '#241811');
  for (let y = 1360; y < 1900; y += 70) s += rect(0, y, W, 4, '#2b1d14');
  for (let x = 0; x < W; x += 160) s += rect(x, 1280, 4, 60, '#2a1d14');
  // 桌上：台燈
  s += rect(150, 1120, 16, 130, '#24304f');
  s += `<path d="M110 1120 L206 1120 L186 1050 L130 1050 Z" fill="#e8b45c"/>`;
  s += `<circle cx="158" cy="1180" r="180" fill="url(#glow)"/>`;
  // 桌上：書 + 杯
  s += rect(380, 1196, 180, 22, '#2e4a7a');
  s += rect(390, 1186, 160, 12, '#3d5f96');
  s += rect(700, 1160, 46, 82, '#d8cbb0');
  s += rect(700, 1160, 46, 10, '#f0e6d0');
  // 窗簾
  s += rect(110, 200, 60, 800, '#1d3a5e');
  s += rect(910, 200, 60, 800, '#1d3a5e');
  return defs() + s;
}

/* ── 街道 ── */
function street() {
  let s = rect(0, 0, W, H, 'url(#night)');
  // 天空：星星 + 雲，唔好留一塊死板嘅色
  for (let i = 0; i < 70; i++) {
    const sx = int(0, W), sy = int(360, 1120);
    s += rect(sx, sy, 3, 3, `rgba(200,215,255,${(0.18 + rnd() * 0.4).toFixed(2)})`);
  }
  for (let i = 0; i < 6; i++) {
    const cx = int(-60, W), cy = int(520, 1040), cw = int(180, 420);
    s += rect(cx, cy, cw, 22, 'rgba(120,140,200,.12)');
    s += rect(cx + 50, cy - 18, cw * 0.55, 18, 'rgba(120,140,200,.10)');
    s += rect(cx + 24, cy + 20, cw * 0.7, 16, 'rgba(120,140,200,.08)');
  }
  // 月亮
  s += `<circle cx="760" cy="470" r="42" fill="#f2e2b8" opacity=".85"/>`;
  s += `<circle cx="746" cy="460" r="38" fill="#101a3c" opacity=".5"/>`;

  // 街道盡頭：一排矮樓，上面留天空（唔好再擺一堆高樓，會砌成一塊暗牆）
  const farShades = ['#1a2450', '#202c5c', '#162045', '#243262', '#1c2750'];
  for (let i = 0; i < 16; i++) {
    const x = int(40, 1040), w = int(66, 180), top = int(1000, 1240);
    const shade = farShades[i % farShades.length];
    s += rect(x, top, w, 1460 - top, shade);
    s += rect(x, top, w, 5, '#2f3d70');
    const cols = Math.max(1, Math.floor((w - 16) / 28));
    for (let c = 0; c < cols; c++) {
      if (rnd() > 0.55) continue;
      s += rect(x + 12 + c * 28, top + 24, 10, 14, pick(['#ffcf7a', '#9fe0ff', '#ffe6b0']));
    }
  }
  // 左邊近樓
  for (let i = 0; i < 2; i++) {
    const w = int(210, 260), x = i * 60;
    const top = int(120, 340);
    s += roofProps(x, w, top, '#060a1a');
    s += tower(x, w, top, 1460, '#060a1a', ['#ffd88a', '#ffb066', '#9fe0ff'], 0.5, 1, '#1e2c5c');
  }
  // 右邊近樓
  for (let i = 0; i < 2; i++) {
    const w = int(210, 260), x = W - w - i * 60;
    const top = int(120, 340);
    s += roofProps(x, w, top, '#060a1a');
    s += tower(x, w, top, 1460, '#060a1a', ['#ffd88a', '#ffb066', '#9fe0ff'], 0.5, 1, '#1e2c5c');
  }
  // 路
  s += rect(0, 1440, W, 480, '#20242e');
  s += rect(0, 1440, W, 12, '#3a4478');
  for (let x = -60; x < W + 60; x += 160) s += rect(x, 1720, 84, 12, '#8c90a8');
  s += rect(0, 1600, W, 14, '#333a52');
  // 遠處巴士
  s += rect(330, 1548, 210, 96, '#c0392b');
  s += rect(340, 1564, 62, 36, '#9fd3e8');
  s += rect(412, 1564, 62, 36, '#9fd3e8');
  s += rect(484, 1564, 42, 36, '#9fd3e8');
  s += rect(352, 1628, 42, 28, '#2a1f1e');
  s += rect(476, 1628, 42, 28, '#2a1f1e');
  // 交通燈
  s += rect(900, 980, 14, 480, '#0e1730');
  s += rect(878, 936, 58, 96, '#0e1730');
  s += `<circle cx="907" cy="964" r="14" fill="#e2544b"/>`;
  s += `<circle cx="907" cy="1000" r="14" fill="#3a4a70"/>`;
  // 路牌
  s += rect(120, 1080, 12, 380, '#0e1730');
  s += rect(56, 1046, 200, 76, '#123c66');
  s += rect(64, 1054, 184, 60, '#0e2a4a');
  s += rect(80, 1072, 150, 10, '#8fc4e8');
  // 燈光
  for (const lx of [250, 830]) {
    s += `<circle cx="${lx}" cy="1470" r="150" fill="url(#glow)"/>`;
  }
  return defs() + s;
}


/* ── 銀行 ── */
function bank() {
  let s = rect(0, 0, W, H, '#0c1630');
  // 牆面格
  for (let y = 0; y < 1180; y += 80) for (let x = 0; x < W; x += 80) s += rect(x + 2, y + 2, 76, 76, '#101d3e');
  // 招牌
  s += rect(150, 150, 780, 130, '#1a2b58');
  s += rect(166, 166, 748, 98, '#0d1830');
  s += rect(210, 196, 220, 38, '#c0392b');
  s += rect(460, 196, 220, 38, '#c0392b');
  s += rect(210, 244, 300, 8, '#ffd98a');
  // 櫃檯玻璃
  s += rect(80, 420, 920, 380, '#16264e');
  s += rect(96, 436, 888, 348, '#1d3468');
  for (let x = 120; x < 980; x += 110) s += rect(x, 436, 10, 348, '#0f1c3c');
  // 櫃檯
  s += rect(0, 800, W, 60, '#3a2a1e');
  s += rect(0, 860, W, 300, '#241811');
  for (let x = 0; x < W; x += 170) s += rect(x, 860, 6, 300, '#2b1d14');
  // 櫃檯燈帶
  s += rect(0, 788, W, 12, '#ffd98a');
  // 排隊欄
  s += rect(120, 1200, 12, 260, '#24304f');
  s += rect(560, 1200, 12, 260, '#24304f');
  s += rect(120, 1240, 452, 8, '#24304f');
  s += rect(120, 1360, 452, 8, '#24304f');
  // 地面
  s += rect(0, 1460, W, 460, '#141a2c');
  for (let x = -100; x < W + 100; x += 150) s += `<path d="M${x} 1450 L${x + 80} 1920" stroke="#1d2540" stroke-width="10"/>`;
  // 天花燈
  for (let x = 120; x < W; x += 280) s += rect(x, 40, 140, 16, '#ffe6b0');
  for (let x = 120; x < W; x += 280) s += `<circle cx="${x + 70}" cy="120" r="120" fill="url(#glow)"/>`;
  return defs() + s;
}

/* ── 辦公室 ── */
function office() {
  let s = rect(0, 0, W, H, '#0a1226');
  // 大窗
  s += rect(120, 160, 840, 720, '#16264e');
  s += rect(140, 180, 800, 680, 'url(#night)');
  // 窗外
  for (let i = 0; i < 10; i++) {
    const x = 160 + int(0, 700), w = int(50, 110), top = 180 + int(240, 480);
    s += rect(x, top, w, 860 - top, '#0a122c');
    for (let k = 0; k < 6; k++) {
      if (rnd() > 0.5) continue;
      s += rect(x + 12 + (k % 3) * 26, top + 22 + Math.floor(k / 3) * 34, 10, 14, pick(['#ffcf7a', '#9fe0ff', '#ff9e5e']));
    }
  }
  s += rect(520, 160, 16, 720, '#16264e');
  s += rect(120, 500, 840, 16, '#16264e');
  // 桌面
  s += rect(0, 1180, W, 50, '#4a3726');
  s += rect(0, 1230, W, 690, '#241811');
  for (let y = 1260; y < 1900; y += 80) s += rect(0, y, W, 5, '#2b1d14');
  // 顯示器
  s += rect(360, 900, 360, 240, '#0d1524');
  s += rect(376, 916, 328, 208, '#1f3a5e');
  s += rect(392, 932, 200, 12, '#7fd0e8');
  s += rect(392, 956, 260, 10, '#3f6a92');
  s += rect(392, 978, 160, 10, '#3f6a92');
  s += rect(520, 1140, 40, 44, '#0d1524');
  // 鍵盤 + 杯
  s += rect(380, 1196, 320, 34, '#1a2136');
  s += rect(700, 1130, 54, 90, '#d8cbb0');
  // 椅
  s += rect(90, 1000, 210, 300, '#141b30');
  s += rect(110, 1300, 170, 30, '#141b30');
  // 燈光
  s += `<circle cx="540" cy="1000" r="260" fill="url(#glow)"/>`;
  return defs() + s;
}

/* ── 醫院走廊 ── */
function hospital() {
  let s = rect(0, 0, W, H, '#0d1a24');
  for (let y = 0; y < 1300; y += 90) for (let x = 0; x < W; x += 90) s += rect(x + 2, y + 2, 86, 86, '#11202c');
  // 天花燈
  for (let x = 90; x < W; x += 240) s += rect(x, 40, 150, 18, '#d8f4ff');
  // 走廊
  s += `<path d="M0 1920 L360 1180 L720 1180 L1080 1920 Z" fill="#16242e"/>`;
  s += `<path d="M360 1180 L720 1180 L720 1196 L360 1196 Z" fill="#243a48"/>`;
  // 地板反光
  for (let i = 0; i < 4; i++) s += rect(430 + i * 40, 1400 + i * 90, 30, 6, 'rgba(216,244,255,.18)');
  // 門
  const doors = [[80, 620, 220, 560], [780, 620, 220, 560], [430, 700, 220, 480]];
  doors.forEach(([x, y, w, h]) => {
    s += rect(x, y, w, h, '#1d3444');
    s += rect(x + 14, y + 14, w - 28, h - 28, '#16303e');
    s += rect(x + w - 46, y + h / 2 - 26, 22, 52, '#7fd0e8');
  });
  // 紅十字
  s += rect(470, 320, 40, 120, '#c0392b');
  s += rect(430, 360, 120, 40, '#c0392b');
  s += rect(400, 300, 200, 200, 'none');
  // 指示牌
  s += rect(120, 300, 230, 70, '#0f5a4a');
  s += rect(140, 322, 150, 10, '#a8e8d8');
  s += rect(140, 342, 100, 10, '#a8e8d8');
  // 自動販賣機
  s += rect(860, 980, 140, 300, '#1d3444');
  s += rect(872, 992, 116, 140, '#2a4a5e');
  s += rect(890, 1160, 80, 24, '#0f1d28');
  return defs() + s;
}

/* ── 茶餐廳 ── */
function cafe() {
  let s = rect(0, 0, W, H, '#141020');
  for (let y = 0; y < 1100; y += 70) for (let x = 0; x < W; x += 70) s += rect(x + 2, y + 2, 66, 66, '#1a1426');
  // 玻璃窗 + 街景
  s += rect(80, 220, 920, 620, '#1b2848');
  s += rect(96, 236, 888, 588, 'url(#night)');
  for (let i = 0; i < 12; i++) {
    const x = 120 + int(0, 720), w = int(40, 90), top = 236 + int(140, 420);
    s += rect(x, top, w, 824 - top, '#0d1730');
    for (let k = 0; k < 4; k++) if (rnd() > 0.4) s += rect(x + 10 + (k % 2) * 24, top + 20 + Math.floor(k / 2) * 30, 8, 12, pick(['#ffcf7a', '#9fe0ff', '#ff7a7a']));
  }
  // 霓虹
  s += rect(700, 640, 220, 60, '#e2544b');
  s += rect(712, 652, 196, 36, '#ff8a6a');
  s += rect(300, 690, 120, 44, '#4be0c0');
  // 窗框
  for (let x = 300; x < 900; x += 300) s += rect(x, 220, 14, 620, '#1b2848');
  // 卡座
  s += rect(0, 980, 300, 340, '#5e1f22');
  s += rect(0, 980, 300, 40, '#7a2a2e');
  s += rect(780, 980, 300, 340, '#5e1f22');
  s += rect(780, 980, 300, 40, '#7a2a2e');
  // 桌
  s += rect(120, 1280, 840, 40, '#d8cbb0');
  s += rect(140, 1320, 20, 200, '#8a7d66');
  s += rect(920, 1320, 20, 200, '#8a7d66');
  // 桌上：奶茶 + 餐牌
  s += rect(300, 1210, 56, 70, '#f0e6d0');
  s += rect(300, 1202, 56, 12, '#c9a86a');
  s += rect(520, 1246, 140, 34, '#f0e6d0');
  s += rect(560, 1200, 60, 46, '#1d3444');
  // 吊燈
  s += rect(500, 80, 8, 110, '#241811');
  s += `<path d="M430 190 L578 190 L548 250 L460 250 Z" fill="#e8b45c"/>`;
  s += `<circle cx="504" cy="300" r="200" fill="url(#glow)"/>`;
  s += rect(0, 1480, W, 460, '#120d16');
  return defs() + s;
}

/* ── 校園（CityU 風格：淺色學術樓 + 弧頂 + 紅招牌） ── */
const PIXEL_FONT = {
  C: ['01110', '10001', '10000', '10000', '10000', '10001', '01110'],
  I: ['11111', '00100', '00100', '00100', '00100', '00100', '11111'],
  T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
  Y: ['10001', '10001', '01010', '00100', '00100', '00100', '00100'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
};

function pixelText(text, x, y, px, color) {
  let s = '';
  for (let i = 0; i < text.length; i++) {
    const glyph = PIXEL_FONT[text[i]];
    if (!glyph) continue;
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 5; c++) {
        if (glyph[r][c] === '1') s += rect(x + i * 6 * px + c * px, y + r * px, px, px, color);
      }
    }
  }
  return s;
}

function campus() {
  let s = rect(0, 0, W, H, 'url(#day)');

  // 晨光
  s += `<circle cx="900" cy="120" r="240" fill="rgba(255,248,220,.38)"/>`;
  // 雲
  for (let i = 0; i < 7; i++) {
    const cx = int(-100, W), cy = int(160, 620), w = int(160, 340);
    s += rect(cx, cy, w, 26, 'rgba(255,255,255,.62)');
    s += rect(cx + 40, cy - 22, w * 0.6, 24, 'rgba(255,255,255,.5)');
    s += rect(cx + 20, cy + 24, w * 0.75, 20, 'rgba(255,255,255,.4)');
  }
  // 遠處山
  s += `<path d="M0 760 L180 620 L360 720 L560 590 L780 700 L960 640 L1080 720 L1080 1180 L0 1180 Z" fill="#a8c6d8" opacity=".7"/>`;
  // 遠處樹 / 矮樓
  for (let i = 0; i < 16; i++) {
    const x = int(-40, W), w = int(40, 90), top = int(700, 860);
    s += rect(x, top, w, 1180 - top, '#8fa9bd');
  }

  // ── CityU 風格學術樓（白天） ──
  const bx = 110, by = 640, bw = 860, bh = 620;
  // 主體
  s += rect(bx, by, bw, bh, '#f7fafc');
  // 弧頂
  s += `<path d="M ${bx - 24} ${by + 10} Q ${bx + bw / 2} ${by - 140} ${bx + bw + 24} ${by + 10} L ${bx + bw + 24} ${by + 44} L ${bx - 24} ${by + 44} Z" fill="#dde6ef"/>`;
  s += `<path d="M ${bx - 24} ${by + 10} Q ${bx + bw / 2} ${by - 140} ${bx + bw + 24} ${by + 10} L ${bx + bw + 24} ${by + 22} L ${bx - 24} ${by + 22} Z" fill="#f7fafd"/>`;
  // 垂直百葉（日光的陰影）
  for (let x = bx + 34; x < bx + bw - 10; x += 48) {
    s += rect(x, by + 70, 22, bh - 90, '#eef4f9');
    s += rect(x + 22, by + 70, 5, bh - 90, '#c6d2df');
  }
  // 每層橫線
  for (let y = by + 150; y < by + bh - 80; y += 130) {
    s += rect(bx + 20, y, bw - 40, 6, '#d2dce7');
  }
  // 玻璃窗（帶反光）
  for (let y = by + 100; y < by + bh - 140; y += 130) {
    for (let x = bx + 60; x < bx + bw - 60; x += 130) {
      if (rnd() > 0.72) continue;
      s += rect(x, y, 74, 84, '#8fb6d4');
      s += rect(x + 6, y + 6, 30, 40, 'rgba(255,255,255,.45)');
      s += rect(x + 74 - 4, y, 4, 84, '#6e94b2');
    }
  }
  // 入口（深色玻璃 + 雨棚）
  const ex = bx + bw / 2 - 150;
  s += rect(ex, by + bh - 250, 300, 250, '#dfe8f1');
  s += rect(ex + 14, by + bh - 236, 272, 236, '#5b7288');
  s += rect(ex + 26, by + bh - 224, 116, 224, '#6f8aa4');
  s += rect(ex + 156, by + bh - 224, 116, 224, '#7a95ae');
  s += rect(ex - 20, by + bh - 274, 340, 26, '#f2f6fa');
  // 樓名（細、灰、唔搶眼）
  s += rect(bx + 44, by + 62, 210, 34, '#dbe4ee');
  s += rect(bx + 56, by + 74, 140, 10, '#9fb0c4');

  // 石碑（矮身，唔要大字）
  s += rect(70, 1240, 46, 220, '#c9d2dc');
  s += rect(88, 1258, 360, 88, '#d8e0e8');
  s += rect(104, 1280, 300, 12, '#b6c2d0');

  // 樹
  const tree = (x, y, r) => {
    let t = rect(x - 10, y, 20, 200, '#8a6a45');
    t += `<circle cx="${x}" cy="${y - r * 0.8}" r="${r}" fill="#3f7044"/>`;
    t += `<circle cx="${x - r * 0.65}" cy="${y - r * 0.3}" r="${r * 0.72}" fill="#356139"/>`;
    t += `<circle cx="${x + r * 0.6}" cy="${y - r * 0.4}" r="${r * 0.8}" fill="#4a8150"/>`;
    return t;
  };
  s += tree(1008, 1420, 92);
  s += tree(30, 1470, 74);

  // 草地 / 路 / 台階
  s += rect(0, 1420, W, 500, '#4e7d4a');
  s += `<path d="M205 1460 L875 1460 L1080 1920 L0 1920 Z" fill="#c8c0a8"/>`;
  for (let i = 0; i < 4; i++) {
    s += rect(220 - i * 26, 1390 + i * 26, 640 + i * 52, 24, '#d8d2bf');
    s += rect(220 - i * 26, 1414 + i * 26, 640 + i * 52, 6, '#b3ac97');
  }
  // 路燈（白天，唔發光）
  for (const lx of [150, 930]) {
    s += rect(lx, 1150, 12, 270, '#8d99a8');
    s += rect(lx - 28, 1136, 68, 16, '#8d99a8');
    s += rect(lx - 26, 1144, 64, 8, '#e8eef4');
  }
  return defs() + s;
}

const out = {
  'bg-city.svg': city(),
  'bg-room.svg': room(),
  'bg-street.svg': street(),
  'bg-bank.svg': bank(),
  'bg-office.svg': office(),
  'bg-hospital.svg': hospital(),
  'bg-cafe.svg': cafe(),
  'bg-campus.svg': campus(),
};

for (const [name, body] of Object.entries(out)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">${body}</svg>`;
  fs.writeFileSync(path.join(OUT, name), svg);
  console.log(name, Math.round(svg.length / 1024) + 'KB');
}
