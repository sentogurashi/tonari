import React from 'react';
import styled from 'styled-components';
import { Module } from '@/layouts';
import { SPACING, TYPOGRAPHY } from '@/constants';

export const ConceptModule: React.FC = () => {
  return (
    <Module>
      <ConceptTextContainer>
        <Paragraph>
          はじめに、湯ありき。
          <br />
          そこは満たされる場所。空っぽにもなれる場所。
        </Paragraph>
        <Paragraph>
          お風呂で汗を流したあとに、最高の一杯を頂くこと。
          <br />
          しっかり食べること、ゆっくり休むこと、じっくり働くこと。
        </Paragraph>
        <Paragraph>
          ひとりで寛いでもいい。みんなで楽しんでもいい。 銭湯という&quot;源&quot;から、
          <br />
          あたたかなくらしが 溢れるように広がっていくこと。
        </Paragraph>
        <Paragraph>
          お風呂で過ごす、「余白」の時間。
          <br />
          そんなしあわせな余白は、まだまだ広げられる。
        </Paragraph>
        <Paragraph>
          さあ、銭湯という場を、あなたのくらしに。
          <br />
          あたらしい時を、そのとなりに。
        </Paragraph>
      </ConceptTextContainer>
    </Module>
  );
};

const Paragraph = styled.p`
  margin: ${SPACING.XX_LARGE}px 0;
  font-size: 1.8rem;
  line-height: ${TYPOGRAPHY.LINE_HEIGHT.THICK};
  text-align: center;
`;

const ConceptTextContainer = styled.section``;

export default ConceptModule;
