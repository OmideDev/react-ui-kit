import { cva, type VariantProps } from "class-variance-authority";

/**
 * Shared CVA building blocks for future components.
 * Component-specific variants belong next to their component.
 */

/** Common size scale used across interactive elements */
export const sizeVariants = {
  xs: "h-7 px-2 text-xs",
  sm: "h-8 px-3 text-sm",
  md: "h-9 px-4 text-sm",
  lg: "h-10 px-6 text-base",
  xl: "h-12 px-8 text-lg",
} as const;

/** Shared interactive focus ring (buttons, links) */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]";

/** Softer focus ring for text fields — no offset so full-width inputs stay clean */
export const fieldFocusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]/20 focus-visible:ring-offset-0";

/** Shared disabled state */
export const disabledState = "disabled:pointer-events-none disabled:opacity-50";

/**
 * Base interactive element pattern — extend in component variants.
 * Example: cva(cn(interactiveBase, "..."), { variants: { ... } })
 */
export const interactiveBase = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap font-medium",
    "transition-colors",
    focusRing,
    disabledState,
  ].join(" "),
  {
    variants: {
      size: sizeVariants,
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type InteractiveBaseProps = VariantProps<typeof interactiveBase>;
