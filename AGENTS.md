# AGENTS.md — Phosphor Design System brief for LLMs

> This file is written for coding agents (Claude Code, Codex, Cursor, Aider…).
> Read it **before** writing any UI in this system. It is short on purpose.

## The two files you must read first

1. [`DESIGN.md`](./DESIGN.md) — the visual rules, the voice, and the anti-patterns. The source of truth.
2. [`colors_and_type.css`](./colors_and_type.css) — the literal tokens, `@font-face`, base type, and animations. **Never duplicate these values; reference them.**

Look at [`design-system.html`](./design-system.html) and [`editorial-content.html`](./editorial-content.html) as the canonical applications. Copy patterns from there before inventing new ones.

---

## Operating rules (do these every time)

1. **Use tokens. Always.** Never hardcode a color, spacing, radius, border, shadow, font, or animation value. If a token doesn't exist for what you need, you're probably doing something off-system — re-read `DESIGN.md` and pick the nearest token.
2. **One typeface: IBM Plex Mono.** UI, body, headings, display — all of them. There is no proportional sans, no pixel display font. If you need a different feel, change weight, size, or tracking, not family.
3. **Dark is the default; light must work too.** Anything you build has to render correctly under both `data-theme="dark"` (default) and `data-theme="light"` (set on `<html>`). The CSS does most of the work via tokens — but verify line illustrations swap their `.svg`/`-light.svg` variant, and never apply phosphor glow on light surfaces.
4. **Sharp corners.** Buttons cap at `--r-2` (8 px); modals at `--r-4` (14 px). No pebble shapes.
5. **Brighten, don't scale, on hover.** Use `--primary-hover` + glow, not transforms.
6. **No emoji, no filled icons, no humans.** Use line illustrations from [`illustrations/`](./illustrations/) (8 motifs, two variants each), or hand-drawn ASCII / bracketed labels like `[ STATUS ]`.
7. **Restrained motion.** Cursor blink, typewriter, scanline sweep, boot flicker — all already in `colors_and_type.css`. Respect `prefers-reduced-motion`.

---

## Token glossary (the short list — full set in `colors_and_type.css`)

**Surfaces (dark):** `--bg-0` void · `--bg-1` page · `--bg-2` card · `--bg-3` raised · `--bg-inset` input.

**Foreground (dark):** `--fg-0` titles · `--fg-1` body · `--fg-2` secondary · `--fg-3` muted · `--fg-4` dividers.

**Primary:** `--primary` `#39ff7a` · `--primary-hover` brighter · `--primary-press` deeper · `--primary-ink` text-on-primary · `--primary-glow` halo.

**Accent (use sparingly):** `--accent` amber CRT · `--accent-glow`.

**Semantic:** `--success` · `--warning` · `--danger` · `--info`.

**Spacing (4 px base):** `--sp-1` (4) … `--sp-10` (80).

**Radius:** `--r-1` (4) · `--r-2` (8) · `--r-3` (10) · `--r-4` (14) · `--r-pill`. Default is sharp.

**Border weights:** `--bw-1` (1 px hairline) · `--bw-2` (2 px).

**Border colors:** `--border-1` (dividers) · `--border-2` (cards) · `--border-3` (active/focus) · `--border-dashed`.

**Shadows (phosphor glow, never Gaussian):** `--shadow-glow-sm/md/lg` · `--shadow-inner`.

**Text glow:** `--text-glow-sm/md/lg`.

**Type scale (1.250 major third):** `--t-xs` 11 · `--t-sm` 13 · `--t-md` 15 (body) · `--t-lg` 18 · `--t-xl` 22 · `--t-2xl` 28 · `--t-3xl` 36 · `--t-4xl` 48 · `--t-5xl` 64 · `--t-6xl` 88.

**Semantic type classes:** `.k-display`, `.k-h1`…`.k-h4`, `.k-lead`, `.k-label` (uppercase wide-tracked mono — the workhorse), `.k-label--bracket` (`[ … ]`), `.k-prompt` (`>` prefix), `code`, `pre`.

**Effects:** `--scanline` repeating linear-gradient · `--noise-opacity`.

**Motion:** `--dur-fast` / `--dur-med` / `--dur-slow` · `--ease-out` / `--ease-in-out`.

---

## When you need to build something new

Search this order:

1. Is there an existing component in `design-system.html`? Copy it.
2. Is there a similar long-form element in `editorial-content.html`? Adapt it.
3. Is there a token combination in `DESIGN.md` that describes the pattern? Apply it.
4. Only then, compose something new — using tokens, IBM Plex Mono, and the voice.

The voice (from DESIGN.md): **terse, technical, slightly conspiratorial — the operator's manual for a piece of 1978 hardware built by someone who really liked their job.**

---

## Do / Don't

| Do | Don't |
|---|---|
| `color: var(--primary);` | `color: #39ff7a;` |
| `padding: var(--sp-4);` | `padding: 16px;` |
| `font-family: var(--font-sans);` | `font-family: 'Inter';` |
| `border: var(--bw-1) solid var(--border-2);` | `border: 1px solid #1f8a4d;` |
| Increase brightness on hover | `transform: scale(1.05);` on hover |
| Use line illustrations from `illustrations/` | Add SVG icons in filled/duotone style |
| `[ STATUS · ONLINE ]` labels | 🟢 emoji status |
| `data-theme="light"` swap for `*-light.svg` | Apply glow on light surfaces |
| Borders/lines | Drop shadows (in dark mode) |

---

## Quick verification checklist before you commit

- [ ] `grep -E '#[0-9a-fA-F]{3,6}' your-new-file` returns no hardcoded hex (token references only).
- [ ] Toggle to `data-theme="light"` in the browser — does it still read?
- [ ] Are corners ≤ 14 px? Are buttons ≤ 8 px?
- [ ] Any emoji or filled icons? Replace.
- [ ] Hover state brightens (`--primary-hover` + glow), doesn't scale?
- [ ] Motion respects `prefers-reduced-motion`?

If all six are yes, you're on-system.
