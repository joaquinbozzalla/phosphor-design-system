# Phosphor CRT — token export

Brand-agnostic design tokens extracted from `colors_and_type.css` and `DESIGN.md`.
Two canonical themes: **dark** (phosphor-on-black, default) and **light** (green ink on parchment).

## Files

| File | Format | Use |
|---|---|---|
| `tokens.json` | W3C DTCG | Style Dictionary, Tokens Studio, generic pipelines |
| `tokens.css`  | CSS custom properties | Drop into any project; dark is `:root`, light is `[data-theme="light"]` |
| `tokens.scss` | Sass maps + `token()` helper | Sass build steps |
| `tokens.js`   | ESM modules | JS/TS, React, styled-components |

## Quick start

**CSS** — link it, then use the variables:
```html
<link rel="stylesheet" href="export/tokens.css" />
<div style="background: var(--bg-1); color: var(--fg-1)"> … </div>
```
Toggle light mode by setting `data-theme="light"` on `<html>`.

**JS/React**:
```js
import tokens, { colorDark } from "./export/tokens.js";
const bg = colorDark.bg1; // "#04110b"
```

**Sass**:
```scss
@use "export/tokens" as t;
.card { background: t.token(t.$color-dark, "bg-2"); }
```

## Notes
- Fonts are referenced, not embedded. IBM Plex Mono (primary, `--font-sans`/`--font-mono`) is self-hosted in the project root; Satoshi (alternate, `--font-alt`) ships in `../fonts/`; VT323 loads via Google Fonts.
- Glow shadows are theme-specific (phosphor glow in dark, hard printed offsets in light) and live in `tokens.json` under `shadow.dark` / `shadow.light` and in `tokens.css`.
- For full typography classes, utilities and animations, use the project's `colors_and_type.css` — this export is tokens only.
