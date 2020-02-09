/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

import { SiteTitleQuery } from '../../types/graphql-types';

const Layout: React.FC = ({ children }) => {
  const data: SiteTitleQuery = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title || ''} />
      <MainLayout>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MainLayout>
    </>
  );
};

const MainLayout = styled.div`
  max-width: 960;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`;

export default Layout;
