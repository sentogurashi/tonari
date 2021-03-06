const BASE_SPACING = 8;
const BASE_BIG_SPACING = 96;
const BASE_STRUCTURE_SPACING = 480;
const BASE_RELATIVE_SPACING = 5;

// export const SPACING = {
//   BASE_SPACING,
//   X_SMALL: BASE_SPACING / 4,
//   SMALL: BASE_SPACING / 2,
//   NORMAL: BASE_SPACING,
//   MIDDLE: BASE_SPACING * 1.5,
//   LARGE: BASE_SPACING * 2,
//   X_LARGE: BASE_SPACING * 3,
//   XX_LARGE: BASE_SPACING * 4,
// } as const;

export const SPACING = {
  BASE: BASE_SPACING,
  XXX_SMALL: 1,
  XX_SMALL: 2,
  X_SMALL: 3,
  SMALL: 4,
  NORMAL: BASE_SPACING,
  MIDDLE: 12,
  LARGE: 16,
  X_LARGE: 24,
  XX_LARGE: 32,
  XXX_LARGE: 40,
} as const;

export const BIG_SPACING = {
  BASE: BASE_BIG_SPACING,
  XX_SMALL: 48,
  X_SMALL: 64,
  SMALL: 80,
  NORMAL: BASE_BIG_SPACING,
  MIDDLE: 112,
  LARGE: 128,
  X_LARGE: 144,
  XX_LARGE: 160,
} as const;

export const STRUCTURE_SPACING = {
  BASE: BASE_STRUCTURE_SPACING,
  XX_SMALL: 192,
  X_SMALL: 288,
  SMALL: 384,
  NORMAL: BASE_STRUCTURE_SPACING,
  MIDDLE: 576,
  LARGE: 672,
  X_LARGE: 768,
  XX_LARGE: 864,
} as const;

export default SPACING;

export const RELATIVE_SPACING = {
  BASE: BASE_RELATIVE_SPACING,
  // XX_SMALL: 192,
  // X_SMALL: 288,
  // SMALL: 384,
  NORMAL: BASE_RELATIVE_SPACING,
  // MIDDLE: 576,
  // LARGE: 672,
  // X_LARGE: 768,
  // XX_LARGE: 864,
} as const;
