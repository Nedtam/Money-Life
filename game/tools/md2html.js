#!/usr/bin/env node
/**
 * 把 报告-给导师.md 转成可直接发送的 HTML（→ Chrome 打 PDF / LibreOffice 打 DOCX）
 *
 *   node tools/md2html.js
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', '报告-给导师.md');
const OUT = path.join(__dirname, '..', '报告-给导师.html');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inline(s) {
  return s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

const lines = fs.readFileSync(SRC, 'utf8').split('\n');
let html = '';
let i = 0;

const isTableRow = l => /^\s*\|.*\|\s*$/.test(l);
const cells = l => l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim());

while (i < lines.length) {
  const line = lines[i];

  if (/^\s*$/.test(line)) { i++; continue; }

  // 表格
  if (isTableRow(line)) {
    const rows = [];
    while (i < lines.length && isTableRow(lines[i])) { rows.push(lines[i]); i++; }
    const head = cells(rows[0]);
    const body = rows.slice(2).map(cells);
    html += '<table><thead><tr>' + head.map(c => `<th>${inline(esc(c))}</th>`).join('') + '</tr></thead><tbody>';
    body.forEach(r => { html += '<tr>' + r.map(c => `<td>${inline(esc(c))}</td>`).join('') + '</tr>'; });
    html += '</tbody></table>\n';
    continue;
  }

  // 標題
  const h = line.match(/^(#{1,4})\s+(.*)$/);
  if (h) {
    const lv = h[1].length;
    const cls = lv === 1 ? ' class="title"' : '';
    html += `<h${lv}${cls}>${inline(esc(h[2]))}</h${lv}>\n`;
    i++; continue;
  }

  // 分隔線
  if (/^\s*---+\s*$/.test(line)) { html += '<hr>\n'; i++; continue; }

  // 引用
  if (/^\s*>\s?/.test(line)) {
    const buf = [];
    while (i < lines.length && /^\s*>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^\s*>\s?/, '')); i++; }
    html += '<blockquote>' + inline(esc(buf.join(' '))) + '</blockquote>\n';
    continue;
  }

  // 無序清單
  if (/^\s*[-*]\s+/.test(line)) {
    const buf = [];
    while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*[-*]\s+/, '')); i++; }
    html += '<ul>' + buf.map(b => `<li>${inline(esc(b))}</li>`).join('') + '</ul>\n';
    continue;
  }

  // 有序清單
  if (/^\s*\d+\.\s+/.test(line)) {
    const buf = [];
    while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) { buf.push(lines[i].replace(/^\s*\d+\.\s+/, '')); i++; }
    html += '<ol>' + buf.map(b => `<li>${inline(esc(b))}</li>`).join('') + '</ol>\n';
    continue;
  }

  // 段落
  const buf = [];
  while (i < lines.length && !/^\s*$/.test(lines[i]) && !isTableRow(lines[i]) && !/^#{1,4}\s/.test(lines[i]) && !/^\s*[-*]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i]) && !/^\s*>\s?/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i])) {
    buf.push(lines[i]); i++;
  }
  if (buf.length) html += `<p>${buf.map(l => inline(esc(l))).join('<br>')}</p>\n`;
}

const css = `
@page { size: A4; margin: 18mm 16mm 20mm; }
* { box-sizing: border-box; }
body { font-family: "PingFang TC","Hiragino Sans CNS","Noto Sans TC",sans-serif; font-size: 10.5pt; line-height: 1.75; color: #1c2430; margin: 0; }
h1.title { font-size: 22pt; color: #8a5a12; border-bottom: 3px solid #c39a52; padding-bottom: 8px; margin: 0 0 6px; letter-spacing: .02em; }
h2 { font-size: 14pt; color: #8a5a12; margin: 26px 0 10px; padding-bottom: 4px; border-bottom: 1px solid #e2d6bf; page-break-after: avoid; }
h3 { font-size: 12pt; color: #24303e; margin: 18px 0 8px; page-break-after: avoid; }
p { margin: 8px 0; text-align: justify; }
ul, ol { margin: 8px 0 8px 0; padding-left: 22px; }
li { margin: 4px 0; }
strong { color: #1a1206; }
a { color: #8a5a12; text-decoration: none; word-break: break-all; }
code { background: #f3ece0; padding: 1px 4px; border-radius: 2px; font-size: 9.5pt; }
blockquote { margin: 12px 0; padding: 8px 14px; border-left: 3px solid #c39a52; background: #faf7f0; color: #4a4a4a; }
hr { border: 0; border-top: 1px solid #ddd; margin: 22px 0; }
table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 9.5pt; page-break-inside: avoid; }
th, td { border: 1px solid #d5cbb8; padding: 6px 9px; text-align: left; vertical-align: top; }
th { background: #f3ece0; font-weight: 700; color: #4a3a1e; }
tr:nth-child(even) td { background: #fbf9f5; }
`;

const doc = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8">
<title>理財人生 · 遊戲設計報告</title><style>${css}</style></head><body>${html}</body></html>`;

fs.writeFileSync(OUT, doc);
console.log('寫出', OUT, Math.round(doc.length / 1024) + 'KB');
