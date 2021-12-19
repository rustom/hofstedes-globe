const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        // '@content': path.resolve(__dirname, 'content'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        // '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};
