import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { AllWorksYamlQuery } from '../../types/graphql-types';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage: React.FC = () => {
  const data: AllWorksYamlQuery = useStaticQuery(graphql`
    query AllWorksYaml {
      allWorksYaml {
        edges {
          node {
            title
            slug
            category
            year
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {data.allWorksYaml.edges.map((edge, index) => (
          <li key={index}>
            <Link to={`/works/${edge.node?.slug}`}>
              {edge.node?.title} - {edge.node?.year} - {edge.node?.category}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
