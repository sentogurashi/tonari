import React from 'react';
// import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Module } from '@/layouts';

import { FaqListQuery } from '@/types';

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

  const faqList: FaqList = faqListBase ? (faqListBase as FaqList) : [];
  return (
    <Module title="よくある質問">
      {faqList.map(faqItem => (
        <dl key={faqItem.id}>
          <dt>{faqItem.question}</dt>
          <dd>{faqItem.answer}</dd>
        </dl>
      ))}
    </Module>
  );
};

export default FaqModule;
