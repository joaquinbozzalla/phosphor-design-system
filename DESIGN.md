# Sistema de diseño generico Design System

> Category: Custom · Surface: web
>
> A **brand-agnostic** phosphor-green CRT terminal design system. Black screens,
> glowing green type, hand-drawn line geometries, restrained animation. Drop in any
> wordmark — the system carries the character, not a single company's logo.
> Dark mode is the natural habitat; light mode is a "printout" inversion on parchment.

This file is the source of truth. Read it before designing anything. Tokens live in
`colors_and_type.css`; preview cards in `preview/`; an applied reference interface in
`ui_kits/app/` and the original marketing kit in `ui_kits/marketing/`.

---

## 1. Product Context & Visual Theme

The system evokes old screens that were black with bright phosphor-green letters — the
kind that hummed in a mission-control basement at 3am. It must read as **modern and
minimal at the same time**: the chrome is quiet and sharp-cornered, while the phosphor
glow, scanline texture, and monospace labels carry the retro-engineering character.

Three visual reservoirs feed the brand:

1. **CRT phosphor terminals** — DEC VT100, Cool Retro Term, htop on an all-black tiling WM.
2. **Aerospace / scientific blueprints** — Saturn V cutaways, mission-control panels, Voyager line art.
3. **Mesoamerican / ornamental line geometries** — woven into data viz and decorative SVG motifs.

The result should feel like *engineering documentation from a future that already
happened*. Confident, not loud — the phosphor is already loud, so the layout stays calm.

**Two equally-canonical modes:**
- **Dark** (default): product surfaces, dashboards, "engaged with the machine" moments.
- **Light**: formal mode — decks, print, anything read at 200% zoom with the lights on.

---

## 2. Color

Color is **monochromatic plus one accent**: greens + amber. Never more than three hues
on a single surface. No purples, no blues except as `--info`. **No bluish-purple
gradients, ever. No gradients on body backgrounds.** All tokens defined in
`colors_and_type.css`.

### Dark mode (default — `:root`, `:root[data-theme="dark"]`)

| Role | Token | Value |
|---|---|---|
| Void behind everything | `--bg-0` | `#000503` |
| Page background | `--bg-1` | `#04110b` |
| Card / panel | `--bg-2` | `#06180f` |
| Raised / hover | `--bg-3` | `#0a2418` |
| Inset (input, code) | `--bg-inset` | `#020a06` |
| Title / high contrast fg | `--fg-0` | `#c8ffd9` |
| Default body fg | `--fg-1` | `#6fff9c` |
| Secondary / labels | `--fg-2` | `#3ddc7a` |
| Muted / placeholder | `--fg-3` | `#1f8a4d` |
| Very muted / dividers | `--fg-4` | `#0d4a29` |
| **Primary phosphor** | `--primary` | `#39ff7a` |
| Primary hover | `--primary-hover` | `#6fff9c` |
| Primary press | `--primary-press` | `#1fd95f` |
| Text on primary | `--primary-ink` | `#021107` |
| **Accent (amber CRT)** | `--accent` | `#ffb84a` |

### Light mode (`:root[data-theme="light"]`)

Inverted phosphor — green ink on a parchment off-white. `--bg-1` `#f1f3e3`,
`--bg-2` `#f7f8ec`, `--fg-0` `#0a3318`, `--fg-1` `#0f5a2a`, `--primary` `#0f7a3a`,
`--accent` `#b8631a`. The primary green darkens to hold contrast against parchment.

### Semantic

`--success #39ff7a` · `--warning #ffb84a` · `--danger #ff4d4d` · `--info #4dd0ff`
(light mode: `#0f7a3a` / `#b8631a` / `#b41818` / `#1064a6`).

### Borders (first-class — a 1px hairline does the job most systems use a shadow for)

`--border-1` subtle divider · `--border-2` card border · `--border-3` active/focus ·
`--border-dashed` reserved for empty states, dropzones, "not yet wired" elements only.

---

## 3. Typography

**IBM Plex Mono is the primary family for the entire system — UI, body, headings, and
display all run on it.** The monospace everywhere gives the whole product its machine-room
character; VT323 adds the occasional pixel boot screen (~5%). Satoshi is kept as an optional
alternate sans face (`--font-alt`) for cases that explicitly call for a proportional face.

| Family | Token | Usage |
|---|---|---|
| **IBM Plex Mono** (weights 300–700 + italics, self-hosted in root) | `--font-sans` / `--font-mono` | UI + display + body + headings, labels, code, terminal output, metadata |
| **VT323** (CDN) | `--font-crt` | chunky pixel boot screens / CRT headers — ~5% usage, sparingly |
| **Satoshi** (10 weights, bundled in `fonts/`) | `--font-alt` | optional alternate proportional sans, when a non-mono face is explicitly wanted |

> Note: IBM Plex Mono tops out at weight 700, so `--font-sans` display (`.k-display`)
> uses 700 as its heaviest weight — there is no 900. VT323 is loaded via Google Fonts
> `@import`; IBM Plex Mono and Satoshi are self-hosted.

**Type scale (1.250 major third):** `--t-xs 11` · `--t-sm 13` · `--t-md 15` (body) ·
`--t-lg 18` · `--t-xl 22` · `--t-2xl 28` · `--t-3xl 36` · `--t-4xl 48` · `--t-5xl 64` ·
`--t-6xl 88`. Line heights `--lh-tight 1.05` → `--lh-loose 1.7`. Tracking `--tracking-wider 0.16em`
for monospace labels.

Semantic classes: `.k-display`, `h1/.k-h1` … `h4/.k-h4`, `.k-lead`, `.k-label`
(uppercase wide-tracked mono — the workhorse), `.k-label--bracket` (`[ ... ]`),
`.k-prompt` (green `>` prefix), `.k-crt` (pixel), `code/pre`.

---

## 4. Spacing

4px base ramp: `--sp-1 4` · `--sp-2 8` · `--sp-3 12` · `--sp-4 16` · `--sp-5 24` ·
`--sp-6 32` · `--sp-7 48` · `--sp-8 64` · `--sp-9 96` · `--sp-10 128`.

**Radii kept small on purpose — CRT chrome is sharp/boxy:** `--r-1 2px` (default,
barely-rounded) · `--r-2 4px` (cards) · `--r-3 8px` (buttons) · `--r-4 14px` (modals,
the maximum) · `--r-pill 999px` (tags, progress, segmented controls only).
**No fully-rounded cards.** Border widths: `--bw-1 1px`, `--bw-2 2px`.

Card padding: `--sp-5` (24px) default, `--sp-4` (16px) compact. Section vertical padding:
96px desktop / 64px mobile. Page padding: 48px desktop / 24px mobile.

---

## 5. Layout & Composition

- **Fixed grid:** 12-column desktop, 4-column mobile. Gutter 24px desktop / 16px mobile.
  Max content width **1200px**.
- **Header is fixed-top:** scanline overlay, 1px bottom border, `backdrop-filter: blur` when scrolled.
- **Footer is bottom-pinned** on short pages — never floating mid-document.
- **No floating CTAs over content** — buttons live inline.
- **Scanline overlay** (`--scanline`) is applied page-level as an `::after`/`::before`
  pseudo-element at ~3% alpha. Whisper-quiet, never loud.
- Imagery is **full-bleed in heroes** behind a heavy dark overlay + scanline, with a
  **protection gradient** (`linear-gradient(180deg, transparent, var(--bg-1) 80%)`) at the
  bottom — **never a capsule pill behind text**.
- Inline content is never translucent; cards are opaque. Backdrop blur is for the header
  and modal scrim only.
- **Line illustrations ship in two theme variants.** The phosphor-green stroke
  (`#39ff7a`) only reads on dark surfaces; on the light "printout" parchment it disappears.
  Every motif in `illustrations/` therefore has a `*.svg` (dark,
  bright phosphor) and a `*-light.svg` (light, `#0f7a3a` on parchment). **Pick the variant
  that matches the surface's theme** — never place the bright `*.svg` on a light background.
  Apply the phosphor glow filter only to the dark variant; the light variant stays a flat,
  unglowing "printed" line. When embedding inline (not via `<img>`) you may instead set the
  stroke to `currentColor` so the motif inherits the active theme's foreground.

---

## 6. Components

Tokens and the marketing kit (`ui_kits/marketing/`) plus the applied kit
(`ui_kits/app/`) demonstrate these in context.

- **Buttons** (`.btn`, `.btn-primary`, `.btn-secondary`): mono uppercase 12px, `--r-3`
  (8px). Primary = solid `--primary` on `--primary-ink` with a soft glow; hover brightens
  + glow doubles; press drops to `--primary-press` with an inset shadow. **No scale on hover/press.**
- **Cards** (`.service-card`, `.work-card`): `--bg-2`, 1px `--border-2`, `--r-2` (4px).
  A small uppercase mono label top-left is the canonical card heading (a panel header on a
  control board). Hover brightens border + faint glow, **no transform**. Work cards reveal
  corner brackets on hover.
- **Inputs / forms:** `--bg-inset`, 1px `--border-2`, `--r-1`. Focus → `--primary` border +
  ring glow. At-rest inputs get a blinking `▌` cursor. Labels use the `> ` prefix.
- **Nav:** fixed header, mono uppercase links, brighten-on-hover with text glow; bracketed
  `[>]` section pointers.
- **Modals:** `--bg-2`, 1px `--primary` border, `--r-4` (14px), `--shadow-glow-lg`. Scrim
  `rgba(0,0,0,0.7)` + `blur(2px)`. Header title wrapped in `[ ... ]`.
- **Terminal block:** the signature product surface — title bar with status dots, mono
  body that types itself out, `$ ` prompts, `[OK]`/`[ERR]` status, scanline overlay.
- **Badges / status chips, alerts, progress, segmented controls:** see preview cards.
  Status uses unicode blocks (`● ◆ ○`) or bracket labels, never emoji.

---

## 7. Motion & Interaction

Animated with restraint — every animation serves a verb (loading, revealing, confirming)
and feels like the screen responding, not the UI fidgeting.

- **Cursor blink** (`k-blink`, 1s step infinite): every prompt and at-rest input.
- **Typewriter reveal** (~30ms/char): headlines and leads on first paint only.
- **Scanline sweep** (`k-sweep`, ~900ms loop): indeterminate progress / loading.
- **Boot flicker** (~200ms, once on first paint, then never).
- **Easing:** `steps(8, end)` (`--ease-step`) for "machine" motion (scanning bars, dial
  sweeps); spring/ease (`--ease-out`, `--ease-spring`) for "human" motion (panels, modals).
  No bouncy springs on layout-level transitions — only tiny tactile feedback.
- **Hover = brighten, never scale.** Links brighten to `--primary-hover` + glow + 1px
  underline at 4px offset. Buttons brighten + glow doubles. Cards brighten border + faint glow.
- **Elevation = phosphor glow**, not Gaussian shadow (dark mode). Light mode uses subtle
  hard offsets (`0 2px 0`) for a printed-document feel, no blur.
- `prefers-reduced-motion: reduce` kills all animation (implemented in the CSS).

---

## 8. Voice & Brand

Terse, technical, slightly conspiratorial — the operator's manual for a piece of 1978
hardware built by someone who really liked their job.

- **Headlines/display:** sentence case, not title case.
- **Labels/metadata/buttons:** `UPPERCASE` with wide letter-spacing — the mono label is brand DNA.
- **Code/paths/system messages:** lowercase mono, exactly as in a terminal.
- **Prompt prefix `>`:** a green `>` before command-energy sentences (lead paragraph,
  section openings). Max one per paragraph block.
- **Bracket label `[>]` / `[ STATUS: ACTIVE ]`:** section pointers and chips, used sparingly.
- **Pronouns:** first-person plural ("we") for the brand, second person ("you") for the
  reader. Never "I", never "our team".
- **Punctuation:** real Unicode (`—`, `…`, `→`) outside terminal blocks; ASCII (`-->`,
  `...`, `[OK]`) inside `.k-mono` / terminal output for authenticity. Em-dash over colon for asides.
- **Numbers when you have them** ("Shipped 14 production apps." not "many clients").

---

## 9. Anti-patterns

Do **not**:

- Use emoji. Use unicode blocks (`■ ▲ ●`), bracket labels (`[OK]`), or Lucide line icons.
- Use bluish-purple gradients, or any gradient on a body background.
- Round corners softly — sharp by default (`--r-1`/`--r-2`); buttons 8px max, modals 14px max.
  No fully-rounded "pebble" cards. This is a CRT, not iOS.
- Scale, translate, or rotate on hover — phosphor brightening is the entire signal.
- Make the scanline overlay loud — it stays at ~3% alpha.
- Use filled/duotone icon sets, hand-drawn SVG humans, or pixel-art as UI affordances
  (pixel art only inside an intentional CRT composition).
- Put a capsule pill behind text over imagery — use the protection gradient instead.
- Use Gaussian drop-shadows in dark mode — elevation is phosphor glow.
- Introduce warm beige/peach/pink AI-canvas washes, or more than three hues per surface.
- Use Inter/Roboto/Arial as a display face, or invent metrics without a source.
