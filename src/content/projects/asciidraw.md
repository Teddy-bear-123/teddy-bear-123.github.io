---
title: "AsciiDraw"
stack: ["C", "Raylib"]
open: true
github: "https://github.com/teddy-bear-123"
order: 2
---

A drawing application that converts sketches to ASCII art in real-time. Built on Raylib for a lightweight native window with custom GLSL shaders for the rasterization pipeline.

Features:
- Live preview as you draw
- Multiple brush modes (block, line, fill)
- Export to plain text or ANSI escape sequences
- Themeable character sets (braille, box-drawing, custom)

Motivated by wanting to embed diagrams in terminal documentation without leaving the terminal. The shader approach lets it run fast even on large canvases.
