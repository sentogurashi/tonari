import React from 'react';
import styled from 'styled-components';

import { Heading, HeadingContainer } from '@/components';

type SizeType = 'large' | 'normal' | 'small';

type ModuleProps = {
  title?: string;
  size?: SizeType;
};

export const Module: React.FC<ModuleProps> = ({ title, size = 'normal', children }) => {
  return (
    <StyledModule size={size}>
      {title ? (
        <HeadingContainer>
          <Heading>{title}</Heading>
        </HeadingContainer>
      ) : (
        ''
      )}
      {children}
    </StyledModule>
  );
};

type StyledModuleProps = {
  size?: SizeType;
};

const StyledModule = styled.section<StyledModuleProps>`
  max-width: ${({ size }): string => (size === 'large' ? '1300px' : '1000px')};
  margin: 0 auto;
  padding: 5vh 5vw;
  scroll-snap-align: start;
  /* height: 100vh; */
`;

export const ModuleContainer = styled.section`
  /* height: 100vh; */
  overflow: auto;
  scroll-snap-type: y proximity;
`;

export default Module;
