import React from 'react';
import styled from 'styled-components';
import { SPACING, LINE, STRUCTURE_SPACING, COLORS } from '@/constants';

type ButtonElementName = 'button' | 'a' | 'span' | 'div';
type ButtonTypeName = 'submit' | 'reset' | 'button';

type ButtonProps = {
  as?: ButtonElementName;
  type?: ButtonTypeName;
  href?: string;
  target?: string;
};

export const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.a`
  display: inline-block;
  min-width: ${STRUCTURE_SPACING.XX_SMALL}px;
  padding: ${SPACING.MIDDLE}px ${SPACING.XXX_LARGE}px;
  border: ${LINE.SHORT_HAND.THIN};
  border-radius: 100px;
  background-color: ${COLORS.UI_BASE};
  color: ${COLORS.UI_TEXT_DARK_BACKGROUND};
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${SPACING.XXX_LARGE}px 0;
`;

export default Button;
