/** Default border radius token key */
export const DEFAULT_RADIUS = "md" as const;

/** Default animation / transition duration in milliseconds */
export const DEFAULT_DURATION = 200 as const;

/** Default CSS transition shorthand */
export const DEFAULT_TRANSITION = "all 200ms cubic-bezier(0.4, 0, 0.2, 1)" as const;

/** Default icon sizes (px) keyed by semantic size */
export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

/** Default spacing values (rem) keyed by scale step */
export const SPACING = {
  none: 0,
  xs: 0.25,
  sm: 0.5,
  md: 1,
  lg: 1.5,
  xl: 2,
  "2xl": 3,
  "3xl": 4,
} as const;

/** Breakpoint values in pixels */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export type IconSize = keyof typeof ICON_SIZES;
export type SpacingKey = keyof typeof SPACING;
export type Breakpoint = keyof typeof BREAKPOINTS;
