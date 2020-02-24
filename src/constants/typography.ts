import { css } from 'styled-components';
import { COLORS } from './colors';

const TEXT_SIZE = {
  SMALL: 1.4,
  NORMAL: 1.6,
  LARGE: 2,
  X_LARGE: 3,
} as const;

const TYPEFACE = {
  // TODO: 英字等
  BASE: `'Noto Sans JP', sans-serif;`,
} as const;

const LINE_HEIGHT = {
  MONOLITHIC: 1,
  THIN: 1.3,
  NORMAL: 1.6,
  THICK: 2,
} as const;

const MIXIN = {
  BASE: css`
    color: ${COLORS.UI_TEXT_MAIN};
    font-family: ${TYPEFACE.BASE};
    font-size: ${TEXT_SIZE.NORMAL}rem;
    font-weight: 500;
    line-height: ${LINE_HEIGHT.NORMAL};
  `,
  DISPLAY: css`
    color: ${COLORS.UI_TEXT_MAIN};
    font-family: ${TYPEFACE.BASE};
    font-size: ${TEXT_SIZE.LARGE}rem;
    font-weight: 500;
    line-height: ${LINE_HEIGHT.NORMAL};
  `,
  SUB: css`
    color: ${COLORS.UI_TEXT_SUB};
    font-family: ${TYPEFACE.BASE};
    font-size: ${TEXT_SIZE.SMALL}rem;
  `,
} as const;

export const TYPOGRAPHY = {
  TEXT_SIZE,
  TYPEFACE,
  LINE_HEIGHT,
  MIXIN,
} as const;

export default TYPOGRAPHY;
