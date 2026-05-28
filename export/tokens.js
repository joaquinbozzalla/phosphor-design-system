// =============================================================
// Phosphor CRT design system — tokens.js (brand-agnostic)
// Generated export. ESM. Import individual groups or the default.
// =============================================================

export const colorDark = {
  bg0: "#000503", bg1: "#04110b", bg2: "#06180f", bg3: "#0a2418", bgInset: "#020a06",
  fg0: "#c8ffd9", fg1: "#6fff9c", fg2: "#3ddc7a", fg3: "#1f8a4d", fg4: "#0d4a29",
  primary: "#39ff7a", primaryHover: "#6fff9c", primaryPress: "#1fd95f", primaryInk: "#021107",
  accent: "#ffb84a",
  success: "#39ff7a", warning: "#ffb84a", danger: "#ff4d4d", info: "#4dd0ff",
  border1: "rgba(57, 255, 122, 0.18)", border2: "rgba(57, 255, 122, 0.32)",
  border3: "rgba(57, 255, 122, 0.55)", borderDashed: "rgba(57, 255, 122, 0.28)",
};

export const colorLight = {
  bg0: "#e8ecd9", bg1: "#f1f3e3", bg2: "#f7f8ec", bg3: "#ecefd6", bgInset: "#e0e4cf",
  fg0: "#0a3318", fg1: "#0f5a2a", fg2: "#1e7a40", fg3: "#4a9b66", fg4: "#8ab59c",
  primary: "#0f7a3a", primaryHover: "#0a5a2a", primaryPress: "#074421", primaryInk: "#f1f3e3",
  accent: "#b8631a",
  success: "#0f7a3a", warning: "#b8631a", danger: "#b41818", info: "#1064a6",
  border1: "rgba(15, 90, 42, 0.18)", border2: "rgba(15, 90, 42, 0.35)",
  border3: "rgba(15, 90, 42, 0.7)", borderDashed: "rgba(15, 90, 42, 0.4)",
};

export const font = {
  sans: '"IBM Plex Mono", "SF Mono", "Menlo", "Consolas", ui-monospace, monospace',
  mono: '"IBM Plex Mono", "SF Mono", "Menlo", "Consolas", monospace',
  alt: '"Satoshi", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  crt: '"VT323", "IBM Plex Mono", monospace',
};

export const fontSize = {
  xs: "11px", sm: "13px", md: "15px", lg: "18px", xl: "22px",
  "2xl": "28px", "3xl": "36px", "4xl": "48px", "5xl": "64px", "6xl": "88px",
};

export const lineHeight = { tight: 1.05, snug: 1.2, normal: 1.5, loose: 1.7 };
export const tracking = { tight: "-0.02em", normal: "0", wide: "0.08em", wider: "0.16em" };

export const spacing = {
  0: "0", 1: "4px", 2: "8px", 3: "12px", 4: "16px",
  5: "24px", 6: "32px", 7: "48px", 8: "64px", 9: "96px", 10: "128px",
};

export const radius = { 0: "0", 1: "2px", 2: "4px", 3: "8px", 4: "14px", pill: "999px" };
export const borderWidth = { 1: "1px", 2: "2px" };

export const motion = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  durFast: "120ms", durBase: "220ms", durSlow: "400ms", durSweep: "900ms",
};

export default {
  colorDark, colorLight, font, fontSize, lineHeight,
  tracking, spacing, radius, borderWidth, motion,
};
