module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.rustom.dev',
    title: "Hofstede's Globe",
    description: "Hofstede's Globe is a tool for visualizing Geert Hofstede's 6 Cultural Dimensions.",
    image: './src/images/icon.png', 
    twitterUsername: '@rustomtweets'
  },
  pathPrefix: '/hofstedes-globe',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-9KHFVG54ST'],
      },
      gtagConfig: {
        anonymize_ip: true,
      },
      pluginConfig: {
        head: true,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-9KHFVG54ST',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hofstede\'s Globe',
        background_color: '#0a1930',
        theme_color: '#b86440',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
