export const sizes = ["", "size-sm", "size-lg"] as const;

export type Size = (typeof sizes)[number];

export const sizesLabels: Record<(typeof sizes)[number], string> = {
  "": "Default",
  "size-sm": "Small",
  "size-lg": "Large",
} as const;
