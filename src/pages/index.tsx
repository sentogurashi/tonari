import React from 'react';
// import { Link, graphql, useStaticQuery } from 'gatsby';

// import { AllWorksYamlQuery } from '../../types/graphql-types';

// import Image from '../components/image';
import { BaseLayout, ModuleContainer, SEO } from '@/layouts';
import { AccessModule, ScheduleModule, ContactModule } from '@/modules';
// import ContactModule from '../modules/ContactModule';

const IndexPage: React.FC = () => {
  // const data: AllWorksYamlQuery = useStaticQuery(graphql`
  //   query AllWorksYaml {
  //     allWorksYaml {
  //       edges {
  //         node {
  //           title
  //           slug
  //           category
  //           year
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <BaseLayout>
      <SEO title="トップ" />
      <ModuleContainer>
        <AccessModule />
        <ScheduleModule />
        <ContactModule />
      </ModuleContainer>
    </BaseLayout>
  );
};

export default IndexPage;
