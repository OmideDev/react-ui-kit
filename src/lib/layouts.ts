import { type ClassValue } from "clsx";
import { cn } from "./utils";

type LayoutClasses = ClassValue[];

/** Flex row, centered on both axes */
export function center(...classes: LayoutClasses) {
  return cn("flex items-center justify-center", ...classes);
}

/** Flex row, space-between with vertical center */
export function between(...classes: LayoutClasses) {
  return cn("flex items-center justify-between", ...classes);
}

/** Flex row, space-around with vertical center */
export function around(...classes: LayoutClasses) {
  return cn("flex items-center justify-around", ...classes);
}

/** Flex row, space-evenly with vertical center */
export function evenly(...classes: LayoutClasses) {
  return cn("flex items-center justify-evenly", ...classes);
}

/** Flex row, align and justify start */
export function start(...classes: LayoutClasses) {
  return cn("flex items-start justify-start", ...classes);
}

/** Flex row, align and justify end */
export function end(...classes: LayoutClasses) {
  return cn("flex items-end justify-end", ...classes);
}

/** Horizontal flex row */
export function row(...classes: LayoutClasses) {
  return cn("flex flex-row", ...classes);
}

/** Vertical flex column */
export function column(...classes: LayoutClasses) {
  return cn("flex flex-col", ...classes);
}

/** Flex with wrap enabled */
export function wrap(...classes: LayoutClasses) {
  return cn("flex flex-wrap", ...classes);
}

/** CSS grid */
export function grid(...classes: LayoutClasses) {
  return cn("grid", ...classes);
}

/** Grid with content centered */
export function gridCenter(...classes: LayoutClasses) {
  return cn("grid place-items-center", ...classes);
}

/** Vertical stack (column with gap) */
export function stack(...classes: LayoutClasses) {
  return cn("flex flex-col gap-4", ...classes);
}

/** Layout helpers namespace for `layout.center(...)` style usage */
export const layout = {
  center,
  between,
  around,
  evenly,
  start,
  end,
  row,
  column,
  wrap,
  grid,
  gridCenter,
  stack,
} as const;
