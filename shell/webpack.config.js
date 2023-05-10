const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "auto",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4200,
    historyApiFallback: true,
    // allowedHosts: 'all',
    // "host": "0.0.0.0",
    //"https": true,
    // client: {
    //   webSocketURL: 'ws://0.0.0.0:0/ws',
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': '*',
    //   'Access-Control-Allow-Methods': '*',
    // },
    //"publicHost": "auto://0.0.0.0:0/ws"
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "core_host",
      filename: "remoteEntry.js",
      remotes: {
        //boilerplateRemote: "boilerplateRemote@[window.remotes.boilerplateRemote]"
        foo: "foo@http://localhost:3000/remoteEntry.js",
        bar: "bar@http://localhost:3001/remoteEntry.js",
      },
      exposes: {},
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
  ],
};
