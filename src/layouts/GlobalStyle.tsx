import { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY } from '@/constants';

export const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=swap'); */
  
  body {
    ${TYPOGRAPHY.MIXIN.BASE}
  }
`;

export default GlobalStyle;
