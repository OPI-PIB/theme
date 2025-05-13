export const variants = ["", "variant-primary", "variant-secondary"] as const;

export type Variant = (typeof variants)[number];

export const variantsLabels: Record<(typeof variants)[number], string> = {
  "": "Default",
  "variant-primary": "Primary",
  "variant-secondary": "Secondary",
} as const;

export const sizes = ["", "size-small", "size-large"] as const;

export type Size = (typeof sizes)[number];

export const sizesLabels: Record<(typeof sizes)[number], string> = {
  "": "Default",
  "size-small": "Small",
  "size-large": "Large",
} as const;
