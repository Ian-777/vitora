import type { HTMLAttributes } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "muted"
  | "small";

export interface TypographyProps
  extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
}