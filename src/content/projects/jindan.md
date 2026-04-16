---
title: "Jiǎndān"
stack: ["C"]
open: true
github: "https://github.com/teddy-bear-123"
order: 3
---

A collection of single-header C libraries in the [STB style](https://github.com/nothings/stb). Drop one `.h` file into your project, define an implementation macro, done.

Included so far:
- **`jd_array.h`** — dynamic array with typed macros, no `void*` casting
- **`jd_map.h`** — open-addressing hash map, configurable hash fn
- **`jd_arena.h`** — arena allocator with optional stack fallback
- **`jd_str.h`** — string builder and interning

The design constraint: zero dependencies, C99 compatible, valgrind-clean. Used personally across several other projects as a standard library baseline.
