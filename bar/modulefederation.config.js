const { dependencies } = require('./package.json');

module.exports = {
  name: 'bar',
  runtime: false,
  exposes: {
    './Component': './src/BarComponent.tsx'
  },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      requiredVersion: dependencies['react-dom'],
    }
  }
};
