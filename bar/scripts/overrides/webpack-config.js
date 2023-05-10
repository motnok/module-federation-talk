const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = config => {

  config.plugins.map(plugin => {
    if(plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.userOptions.inject = false;
    }
    return plugin;
  });

  config.plugins.push(new ModuleFederationPlugin(require('../../modulefederation.config.js')));

  config.output.uniqueName = 'foo'
  config.output.publicPath = 'auto';
  config.output.scriptType = 'text/javascript';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);