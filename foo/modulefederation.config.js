const { dependencies } = require('./package.json');

module.exports = {
  name: 'foo',
  runtime: false,
  exposes: {
    './Component': './src/FooComponent.tsx'
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
