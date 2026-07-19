/**
 * TypeScript mirrors of CSS design tokens in styles/tokens.css.
 * Prefer CSS variables for styling; use these when you need typed values in JS/TS.
 */

export const colors = {
  background: "var(--color-background)",
  foreground: "var(--color-foreground)",
  muted: "var(--color-muted)",
  mutedForeground: "var(--color-muted-foreground)",
  primary: "var(--color-primary)",
  primaryForeground: "var(--color-primary-foreground)",
  secondary: "var(--color-secondary)",
  secondaryForeground: "var(--color-secondary-foreground)",
  accent: "var(--color-accent)",
  accentForeground: "var(--color-accent-foreground)",
  destructive: "var(--color-destructive)",
  destructiveForeground: "var(--color-destructive-foreground)",
  success: "var(--color-success)",
  successForeground: "var(--color-success-foreground)",
  warning: "var(--color-warning)",
  warningForeground: "var(--color-warning-foreground)",
  info: "var(--color-info)",
  infoForeground: "var(--color-info-foreground)",
  border: "var(--color-border)",
  input: "var(--color-input)",
  ring: "var(--color-ring)",
  card: "var(--color-card)",
  cardForeground: "var(--color-card-foreground)",
  popover: "var(--color-popover)",
  popoverForeground: "var(--color-popover-foreground)",
} as const;

export const radii = {
  none: "var(--radius-none)",
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  xl: "var(--radius-xl)",
  "2xl": "var(--radius-2xl)",
  full: "var(--radius-full)",
  default: "var(--radius-default)",
} as const;

export const shadows = {
  xs: "var(--shadow-xs)",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
  "2xl": "var(--shadow-2xl)",
  inner: "var(--shadow-inner)",
  none: "var(--shadow-none)",
} as const;

export const fontSizes = {
  xs: "var(--font-size-xs)",
  sm: "var(--font-size-sm)",
  base: "var(--font-size-base)",
  lg: "var(--font-size-lg)",
  xl: "var(--font-size-xl)",
  "2xl": "var(--font-size-2xl)",
  "3xl": "var(--font-size-3xl)",
  "4xl": "var(--font-size-4xl)",
  "5xl": "var(--font-size-5xl)",
} as const;

export const fontWeights = {
  light: "var(--font-weight-light)",
  normal: "var(--font-weight-normal)",
  medium: "var(--font-weight-medium)",
  semibold: "var(--font-weight-semibold)",
  bold: "var(--font-weight-bold)",
} as const;

export const spacing = {
  0: "var(--spacing-0)",
  px: "var(--spacing-px)",
  0.5: "var(--spacing-0-5)",
  1: "var(--spacing-1)",
  1.5: "var(--spacing-1-5)",
  2: "var(--spacing-2)",
  2.5: "var(--spacing-2-5)",
  3: "var(--spacing-3)",
  4: "var(--spacing-4)",
  5: "var(--spacing-5)",
  6: "var(--spacing-6)",
  8: "var(--spacing-8)",
  10: "var(--spacing-10)",
  12: "var(--spacing-12)",
  16: "var(--spacing-16)",
  20: "var(--spacing-20)",
  24: "var(--spacing-24)",
} as const;

export const durations = {
  75: "var(--duration-75)",
  100: "var(--duration-100)",
  150: "var(--duration-150)",
  200: "var(--duration-200)",
  300: "var(--duration-300)",
  500: "var(--duration-500)",
  700: "var(--duration-700)",
  1000: "var(--duration-1000)",
  default: "var(--duration-default)",
} as const;

export const zIndex = {
  hide: "var(--z-hide)",
  base: "var(--z-base)",
  dropdown: "var(--z-dropdown)",
  sticky: "var(--z-sticky)",
  fixed: "var(--z-fixed)",
  modalBackdrop: "var(--z-modal-backdrop)",
  modal: "var(--z-modal)",
  popover: "var(--z-popover)",
  tooltip: "var(--z-tooltip)",
  toast: "var(--z-toast)",
} as const;

export const containers = {
  xs: "var(--container-xs)",
  sm: "var(--container-sm)",
  md: "var(--container-md)",
  lg: "var(--container-lg)",
  xl: "var(--container-xl)",
  "2xl": "var(--container-2xl)",
  "3xl": "var(--container-3xl)",
  "4xl": "var(--container-4xl)",
  "5xl": "var(--container-5xl)",
  "6xl": "var(--container-6xl)",
  "7xl": "var(--container-7xl)",
  full: "var(--container-full)",
} as const;

export const tokens = {
  colors,
  radii,
  shadows,
  fontSizes,
  fontWeights,
  spacing,
  durations,
  zIndex,
  containers,
} as const;
