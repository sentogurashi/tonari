import React from 'react';
// import { Link, graphql, useStaticQuery } from 'gatsby';

// import { AllWorksYamlQuery } from '../../types/graphql-types';

// import Image from '../components/image';
import { BaseLayout, ModuleContainer, SEO, HeroImage } from '@/layouts';
import {
  ConceptModule,
  UseCaseModule,
  AccessModule,
  FaqModule,
  ScheduleModule,
  ContactModule,
  AboutModule,
} from '@/modules';
// import ContactModule from '../modules/ContactModule';

const IndexPage: React.FC = () => {
  return (
    <BaseLayout>
      <SEO title="トップ" />
      <HeroImage />
      <ModuleContainer>
        <ConceptModule />
        <UseCaseModule />
        <AccessModule />
        <ScheduleModule />
        <ContactModule />
        <FaqModule />
        <AboutModule />
      </ModuleContainer>
    </BaseLayout>
  );
};

export default IndexPage;
