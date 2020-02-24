// import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  children: string;
};

// const Heading: React.FC<HeadingProps> = ({ children }) => {
//   return <h2>{children}</h2>;
// };

export const Heading = styled.h2<HeadingProps>`
  font-size: 20px;
`;

export default Heading;
