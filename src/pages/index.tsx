import React from 'react';
// import { Link, graphql, useStaticQuery } from 'gatsby';

// import { AllWorksYamlQuery } from '../../types/graphql-types';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

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
    <Layout>
      <SEO title="小杉湯となり" />
      <p>これから作るぞ〜〜</p>
    </Layout>
  );
};

export default IndexPage;
