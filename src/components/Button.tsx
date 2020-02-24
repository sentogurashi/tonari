import React from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';
import { SPACING, LINE } from '@/constants';

type ButtonElementName = 'button' | 'a' | 'span' | 'div';
type ButtonTypeName = 'submit' | 'reset' | 'button';

type ButtonProps = {
  as?: ButtonElementName;
  type?: ButtonTypeName;
};

export const Button: React.FC<ButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const StyledButton = styled.a`
  display: inline-block;
  padding: ${SPACING.MIDDLE}px ${SPACING.XXX_LARGE}px;
  border: ${LINE.SHORT_HAND.THIN};
`;

export default Button;
