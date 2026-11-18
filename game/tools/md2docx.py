#!/usr/bin/env python3
"""
把 报告-给导师.md 转成 DOCX（用 python-docx 直接生成，不经 HTML，避免中文编码问题）

    python3 tools/md2docx.py
"""
import re
import sys
from pathlib import Path

from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Pt, RGBColor, Cm

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "报告-给导师.md"
OUT = ROOT / "理财人生-设计报告.docx"

GOLD = RGBColor(0x8A, 0x5A, 0x12)
INK = RGBColor(0x1C, 0x24, 0x30)


def set_font(run, name="PingFang TC", size=None, bold=None, color=None):
    run.font.name = name
    rpr = run._element.get_or_add_rPr()
    rfonts = rpr.find(qn("w:rFonts"))
    if rfonts is None:
        rfonts = OxmlElement("w:rFonts")
        rpr.append(rfonts)
    rfonts.set(qn("w:eastAsia"), name)
    rfonts.set(qn("w:ascii"), name)
    rfonts.set(qn("w:hAnsi"), name)
    if size is not None:
        run.font.size = Pt(size)
    if bold is not None:
        run.bold = bold
    if color is not None:
        run.font.color.rgb = color


def shade(cell, hexcolor):
    tcpr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hexcolor)
    tcpr.append(shd)


def add_inline(par, text, size=10.5, color=INK):
    """處理 **粗體** 同 `code`"""
    parts = re.split(r"(\*\*[^*]+\*\*|`[^`]+`)", text)
    for p in parts:
        if not p:
            continue
        if p.startswith("**") and p.endswith("**"):
            r = par.add_run(p[2:-2])
            set_font(r, size=size, bold=True, color=color)
        elif p.startswith("`") and p.endswith("`"):
            r = par.add_run(p[1:-1])
            set_font(r, name="Menlo", size=size - 0.5, color=color)
        else:
            r = par.add_run(p)
            set_font(r, size=size, color=color)


def main():
    if not SRC.exists():
        sys.exit(f"找唔到 {SRC}")
    lines = SRC.read_text(encoding="utf-8").split("\n")

    doc = Document()
    # 版面
    for s in doc.sections:
        s.page_height = Cm(29.7)
        s.page_width = Cm(21.0)
        s.top_margin = Cm(2.0)
        s.bottom_margin = Cm(2.0)
        s.left_margin = Cm(2.0)
        s.right_margin = Cm(2.0)

    style = doc.styles["Normal"]
    style.font.name = "PingFang TC"
    style.font.size = Pt(10.5)
    style.element.rPr.rFonts.set(qn("w:eastAsia"), "PingFang TC")

    i = 0
    while i < len(lines):
        line = lines[i]

        if not line.strip():
            i += 1
            continue

        # 表格
        if re.match(r"^\s*\|.*\|\s*$", line):
            rows = []
            while i < len(lines) and re.match(r"^\s*\|.*\|\s*$", lines[i]):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
                i += 1
            head = rows[0]
            body = rows[2:] if len(rows) > 1 else []
            table = doc.add_table(rows=1, cols=len(head))
            table.style = "Table Grid"
            table.alignment = WD_TABLE_ALIGNMENT.CENTER
            for ci, txt in enumerate(head):
                cell = table.rows[0].cells[ci]
                cell.text = ""
                p = cell.paragraphs[0]
                add_inline(p, txt, size=9.5, color=RGBColor(0x4A, 0x3A, 0x1E))
                for r in p.runs:
                    set_font(r, size=9.5, bold=True, color=RGBColor(0x4A, 0x3A, 0x1E))
                shade(cell, "F3ECE0")
            for r in body:
                cells = table.add_row().cells
                for ci, txt in enumerate(r[:len(head)]):
                    cells[ci].text = ""
                    add_inline(cells[ci].paragraphs[0], txt, size=9.5)
            doc.add_paragraph()
            continue

        # 標題
        m = re.match(r"^(#{1,4})\s+(.*)$", line)
        if m:
            lv = len(m.group(1))
            text = m.group(2)
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(16 if lv <= 2 else 10)
            p.paragraph_format.space_after = Pt(6)
            p.paragraph_format.keep_with_next = True
            r = p.add_run(text)
            if lv == 1:
                set_font(r, size=22, bold=True, color=GOLD)
            elif lv == 2:
                set_font(r, size=14, bold=True, color=GOLD)
            else:
                set_font(r, size=12, bold=True, color=INK)
            i += 1
            continue

        # 分隔線：用一條細線段落代替
        if re.match(r"^\s*---+\s*$", line):
            p = doc.add_paragraph()
            ppr = p._p.get_or_add_pPr()
            pbdr = OxmlElement("w:pBdr")
            bottom = OxmlElement("w:bottom")
            bottom.set(qn("w:val"), "single")
            bottom.set(qn("w:sz"), "6")
            bottom.set(qn("w:color"), "C39A52")
            pbdr.append(bottom)
            ppr.append(pbdr)
            i += 1
            continue

        # 引用
        if re.match(r"^\s*>\s?", line):
            buf = []
            while i < len(lines) and re.match(r"^\s*>\s?", lines[i]):
                buf.append(re.sub(r"^\s*>\s?", "", lines[i]))
                i += 1
            p = doc.add_paragraph()
            p.paragraph_format.left_indent = Cm(0.5)
            add_inline(p, " ".join(buf), size=10, color=RGBColor(0x4A, 0x4A, 0x4A))
            continue

        # 無序清單
        if re.match(r"^\s*[-*]\s+", line):
            while i < len(lines) and re.match(r"^\s*[-*]\s+", lines[i]):
                txt = re.sub(r"^\s*[-*]\s+", "", lines[i])
                p = doc.add_paragraph(style="List Bullet")
                p.paragraph_format.space_after = Pt(2)
                add_inline(p, txt)
                i += 1
            continue

        # 有序清單
        if re.match(r"^\s*\d+\.\s+", line):
            while i < len(lines) and re.match(r"^\s*\d+\.\s+", lines[i]):
                txt = re.sub(r"^\s*\d+\.\s+", "", lines[i])
                p = doc.add_paragraph(style="List Number")
                p.paragraph_format.space_after = Pt(2)
                add_inline(p, txt)
                i += 1
            continue

        # 段落（連續行用換行連接）
        buf = []
        while (i < len(lines) and lines[i].strip()
               and not re.match(r"^\s*\|", lines[i])
               and not re.match(r"^#{1,4}\s", lines[i])
               and not re.match(r"^\s*[-*]\s+", lines[i])
               and not re.match(r"^\s*\d+\.\s+", lines[i])
               and not re.match(r"^\s*>\s?", lines[i])
               and not re.match(r"^\s*---+\s*$", lines[i])):
            buf.append(lines[i])
            i += 1
        if buf:
            p = doc.add_paragraph()
            p.paragraph_format.space_after = Pt(6)
            p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
            for k, t in enumerate(buf):
                if k:
                    p.add_run().add_break()
                add_inline(p, t)

    doc.save(OUT)
    print("寫出", OUT, f"{OUT.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
