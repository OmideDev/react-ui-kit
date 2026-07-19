import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind-aware conflict resolution.
 * Use this for every component className composition.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Joins aria-describedby ids from the control and an outer FormField.
 * Returns `undefined` when nothing is provided (keeps DOM clean).
 */
export function composeAriaDescribedBy(
  ...ids: Array<string | undefined | null | false>
): string | undefined {
  const merged = ids.filter(Boolean).join(" ").trim();
  return merged.length > 0 ? merged : undefined;
}
