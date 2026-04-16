---
name: "Jiǎndān"
tags: ["library", "c"]
features: ["Dynamic array", "Hash map", "Arena allocator", "String builder"]
languages: ["C"]
github: "https://github.com/teddy-bear-123"
order: 5
---

Collection of single-header C libraries in [STB style](https://github.com/nothings/stb). Drop one `.h` file, define the impl macro, done.

- **`jd_array.h`** — typed dynamic array, no `void*` casting  
- **`jd_map.h`** — open-addressing hash map, configurable hash fn  
- **`jd_arena.h`** — arena allocator with optional stack fallback  
- **`jd_str.h`** — string builder and interning  

Zero deps, C99, valgrind-clean.
