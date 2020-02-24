import React, { useState } from 'react';
// import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import { Module } from '@/layouts';

import { FaqListQuery } from '@/types';
import { SPACING, LINE } from '@/constants';

type FaqItem = {
  id: number;
  answer: string;
  question: string;
};

type FaqList = FaqItem[];

export const FaqModule: React.FC = () => {
  const data: FaqListQuery = useStaticQuery(graphql`
    query FaqList {
      settingYaml {
        moduleInfo {
          faq {
            faqList {
              id
              question
              answer
            }
          }
        }
      }
    }
  `);

  const faqListBase = data.settingYaml?.moduleInfo?.faq?.faqList;

  const [currentFaqId, setCurrentFaqId] = useState<number | null>(null);

  const faqList: FaqList = faqListBase ? (faqListBase as FaqList) : [];
  return (
    <Module title="よくある質問">
      <div>
        {faqList.map(({ id, question, answer }) => {
          const isOpen = currentFaqId === id;
          return (
            <Expand key={id}>
              <ExpandTitle onClick={(): void => setCurrentFaqId(isOpen ? null : id)}>
                {question}
              </ExpandTitle>
              {isOpen && <ExpandContent>{answer}</ExpandContent>}
            </Expand>
          );
        })}
      </div>
    </Module>
  );
};

const Expand = styled.dl`
  border-bottom: ${LINE.SHORT_HAND.NORMAL};

  &:first-child {
    border-top: ${LINE.SHORT_HAND.NORMAL};
  }
`;

const ExpandTitle = styled.dt`
  display: block;
  padding: ${SPACING.LARGE}px;
  cursor: pointer;
`;

const ExpandContent = styled.dd`
  padding: ${SPACING.LARGE}px;
`;

export default FaqModule;
