"""Convierte un archivo de tanda (.md) en HTML listo para pegar en Outlook.

Uso:
    python3 busqueda_trabajo/tools/md2outlook.py busqueda_trabajo/mails_2026-11_tanda5.md [--copy]

Genera <archivo>_outlook.html al lado del .md. Con --copy (solo macOS) además
lo deja en el portapapeles como HTML, para pegar directo con Cmd+V.
"""
import html, re, subprocess, sys
from pathlib import Path

FONT = "font-family:Calibri,Arial,sans-serif;font-size:11pt;color:#222;"
TD = "border:1px solid #bbb;padding:4px 6px;vertical-align:top;" + FONT
TH = TD + "background:#1f5c4d;color:#fff;font-weight:bold;"


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2" style="color:#1a5fb4;">\1</a>', t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"`([^`]+)`", r"\1", t)
    return t


def cells(row):
    return [c.strip() for c in row.strip().strip("|").split("|")]


def convert(lines):
    out = [f'<html><head><meta charset="utf-8"></head><body style="{FONT}">']
    i = 0
    while i < len(lines):
        ln = lines[i]
        if ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(lines[i])
                i += 1
            out.append('<table cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:6px 0 14px 0;">')
            out.append("<tr>" + "".join(f'<th style="{TH}">{inline(c)}</th>' for c in cells(rows[0])) + "</tr>")
            for r in rows[2:]:
                out.append("<tr>" + "".join(f'<td style="{TD}">{inline(c)}</td>' for c in cells(r)) + "</tr>")
            out.append("</table>")
            continue
        m = re.match(r"^(#{1,4}) (.*)", ln)
        if m:
            size = {1: "18pt", 2: "14pt", 3: "12pt", 4: "11pt"}[len(m.group(1))]
            out.append(f'<p style="{FONT}font-size:{size};font-weight:bold;color:#1f5c4d;margin:16px 0 6px 0;">{inline(m.group(2))}</p>')
        elif ln.strip() == "---":
            out.append('<hr style="border:none;border-top:1px solid #ccc;">')
        elif ln.startswith("- "):
            out.append(f'<p style="{FONT}margin:3px 0 3px 14px;">&bull; {inline(ln[2:])}</p>')
        elif ln.strip():
            out.append(f'<p style="{FONT}margin:4px 0;">{inline(ln)}</p>')
        i += 1
    out.append("</body></html>")
    return "\n".join(out)


def copy_to_clipboard(html_text):
    hexdata = html_text.encode("utf-8").hex()
    script = f'set the clipboard to {{«class HTML»:«data HTML{hexdata}», string:"Ver versión HTML"}}'
    subprocess.run(["osascript", "-e", script], check=True)


if __name__ == "__main__":
    src = Path(sys.argv[1])
    dst = src.with_name(src.stem + "_outlook.html")
    result = convert(src.read_text(encoding="utf-8").splitlines())
    dst.write_text(result, encoding="utf-8")
    print(dst)
    if "--copy" in sys.argv:
        copy_to_clipboard(result)
        print("Copiado al portapapeles")
