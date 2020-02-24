import React from 'react';
import styled from 'styled-components';

import { Heading, HeadingContainer } from '@/components';

type ModuleProps = {
  title?: string;
};

export const Module: React.FC<ModuleProps> = ({ title, children }) => {
  return (
    <StyledModule>
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

const StyledModule = styled.section`
  max-width: 1000px;
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
