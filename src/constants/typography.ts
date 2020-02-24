import { css } from 'styled-components';
import { COLORS } from './colors';

const TEXT_SIZE = {
  SMALL: 14,
  NORMAL: 16,
} as const;

const TYPEFACE = {
  // TODO: 英字等
  BASE: `'Sawarabi Gothic', sans-serif;`,
} as const;

const MIXIN = {
  BASE: css`
    color: ${COLORS.UI_TEXT_MAIL};
    font-family: ${TYPEFACE.BASE};
    font-size: ${TEXT_SIZE.NORMAL}px;
  `,
  SUB: css`
    color: ${COLORS.UI_TEXT_SUB};
    font-family: ${TYPEFACE.BASE};
    font-size: ${TEXT_SIZE.SMALL}px;
  `,
} as const;

export const TYPOGRAPHY = {
  TEXT_SIZE,
  TYPEFACE,
  MIXIN,
} as const;

export default TYPOGRAPHY;
