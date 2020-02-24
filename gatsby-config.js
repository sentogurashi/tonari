/* eslint-disable @typescript-eslint/camelcase */

// https://www.tomawari.com/2019/09/gatsby-env-undefined/#gatsby-configjs
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `./.env.${env}` });

module.exports = {
  siteMetadata: {
    title: '小杉湯となりWeb',
    description: '小杉湯となりのナイスな説明文がここに入る',
    author: 'ogwtkhr',
    apiConfig: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
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
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
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
