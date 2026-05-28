<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/banner-light.svg">
  <img alt="Phosphor Design System" src="docs/banner-dark.svg" width="100%">
</picture>

# Phosphor Design System

**A phosphor-green editorial design system inspired by old CRT terminals.**
Black screens, glowing green type, hand-drawn line geometries, and restrained, machine-like motion.
Modern and minimal in structure; retro in texture.

[![License: MIT](https://img.shields.io/badge/License-MIT-39ff7a?style=flat-square&labelColor=04110b)](./LICENSE)
[![No build](https://img.shields.io/badge/build-none-39ff7a?style=flat-square&labelColor=04110b)](#tech)
[![Theme](https://img.shields.io/badge/theme-dark%20%2B%20light-39ff7a?style=flat-square&labelColor=04110b)](#what-s-inside)
[![Made by](https://img.shields.io/badge/by-joaquinbozzalla-39ff7a?style=flat-square&labelColor=04110b)](https://joaquinbozzalla.com)

[**design-system.html**](./design-system.html) &nbsp;·&nbsp; [**editorial-content.html**](./editorial-content.html) &nbsp;·&nbsp; [**DESIGN.md**](./DESIGN.md)

</div>

---

## Live demo

🟢 **[joaquinbozzalla.github.io/phosphor-design-system](https://joaquinbozzalla.github.io/phosphor-design-system/)**

Or open the HTML files directly in a browser — no build step, no dependencies.

- [`design-system.html`](./design-system.html) — the full system: color, type, space, components, motion, imagery, voice.
- [`editorial-content.html`](./editorial-content.html) — the system applied to long-form content: links, tables, images, video, code, callouts.

Both pages share the same theme toggle; the state persists across them via `localStorage`.

> [!TIP]
> Serve the folder with any static server (`python3 -m http.server`, `npx serve`, etc.) so the fonts load over `http://` instead of `file://`.

---

## What's inside

```
.
├── design-system.html          # the system, documented
├── editorial-content.html      # the system, applied to editorial content
├── colors_and_type.css         # all tokens + @font-face + base type + animations
├── illustrations/              # 8 SVG line-art motifs × 2 theme variants (*.svg + *-light.svg)
├── fonts/
│   ├── Satoshi-*.otf           # optional alternate sans (10 weights)
│   └── ibm-plex-mono/          # self-hosted primary mono (9 weights) + OFL
├── export/                     # the same tokens as CSS / SCSS / JS / JSON
└── DESIGN.md                   # design rules, voice, anti-patterns — the source of truth
```

---

## Use it in your own project

### Option A — drop the whole folder in

Copy the directory, link `colors_and_type.css`, set `data-theme="dark"` (or `"light"`) on `<html>`, and start building with the tokens.

```html
<link rel="stylesheet" href="phosphor-design-system/colors_and_type.css">
<html data-theme="dark">
```

### Option B — tokens only

If you already have a stylesheet, grab the format you want from [`export/`](./export):

| File | For |
|---|---|
| [`export/tokens.css`](./export/tokens.css) | CSS custom properties (drop-in) |
| [`export/tokens.scss`](./export/tokens.scss) | Sass maps + helpers |
| [`export/tokens.js`](./export/tokens.js) | ESM modules (React, styled-components, vanilla JS) |
| [`export/tokens.json`](./export/tokens.json) | W3C DTCG (Style Dictionary, Tokens Studio) |

> [!IMPORTANT]
> Read [`DESIGN.md`](./DESIGN.md) before you start — it holds the rules, the voice, and the anti-patterns (no emoji, no purple gradients, sharp corners, brighten-don't-scale).

---

## Tech

Vanilla HTML + CSS. No framework, no build, no dependencies. Themed via a single `data-theme` attribute and CSS custom properties.

<details>
<summary><b>Browser support</b></summary>

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses `color-mix()`, CSS custom properties, `backdrop-filter`, and `@font-face` — all baseline-supported.

</details>

<details>
<summary><b>Anti-patterns (the short list — see DESIGN.md §9)</b></summary>

- No emoji, no filled/duotone icons, no hand-drawn humans
- No bluish-purple gradients or body-background gradients
- No soft pebble corners — buttons 8&nbsp;px max, modals 14&nbsp;px max
- No Gaussian drop-shadows in dark mode; no loud scanlines
- Brighten, don't scale, on hover

</details>

---

## Credits

- **IBM Plex Mono** — primary monospace, self-hosted under `fonts/ibm-plex-mono/`. SIL Open Font License (see [`fonts/ibm-plex-mono/OFL.txt`](./fonts/ibm-plex-mono/OFL.txt)).
- **Satoshi** — optional alternate sans, by [Indian Type Foundry / Fontshare](https://www.fontshare.com/fonts/satoshi).
- **VT323** — CRT pixel display, via [Google Fonts](https://fonts.google.com/specimen/VT323).

---

## License

[MIT](./LICENSE) for the code, CSS, tokens, and illustrations. Bundled fonts retain their original licenses (IBM Plex Mono under OFL; Satoshi per Fontshare's terms).

---

<div align="center">

Made by [**Joaquín Bozzalla**](https://joaquinbozzalla.com) &nbsp;·&nbsp; [github.com/joaquinbozzalla](https://github.com/joaquinbozzalla)

`> one thousand no's for every yes`

</div>
