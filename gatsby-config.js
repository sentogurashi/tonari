/* eslint-disable @typescript-eslint/camelcase */

// https://www.tomawari.com/2019/09/gatsby-env-undefined/#gatsby-configjs
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: '小杉湯となり',
    description:
      '杉並区・高円寺にある銭湯「小杉湯」のとなり。銭湯が街のお風呂であるように、街に開かれたもう一つの家のような場所です。',
    author: 'ogwtkhr',
    googleApiKey: process.env.GOOGLE_API_KEY,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'setting',
        path: `${__dirname}/src/yaml/setting.yaml`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/main_logo.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'graphql-types.d.ts',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': './src',
          // '@components': './src/components',
          // '@constants': './src/constants',
          // '@layouts': './src/layouts',
          // '@modules': './src/modules',
          // '@pages': './src/pages',
          // '@types': './src/types',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'css'],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
