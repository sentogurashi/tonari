import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '@/constants';

export const Footer: React.FC = () => (
  <StyledFooter>© {new Date().getFullYear()} 銭湯ぐらし</StyledFooter>
);

const StyledFooter = styled.footer`
  ${TYPOGRAPHY.MIXIN.SUB}
  text-align: center;
`;

export default Footer;
