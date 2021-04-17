const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const deps = require("./package.json").dependencies;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './build'),
        publicPath: ''
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        index: 'index.html',
        port: 9000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env', '@babel/react' ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          inject: 'body',
          template: path.resolve(__dirname, 'index.html'),
          minify: false
      }),
      new ModuleFederationPlugin({
        name: 'App',
        remotes: {
            FirstApp: 'FirstApp@http://localhost:9001/remoteEntry.js'
        },
        shared: [
            {
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
              },
              redux: {
                singleton: true,
                requiredVersion: deps.redux,
              },
              "react-redux": {
                singleton: true,
                requiredVersion: deps["react-redux"],
              },
            },
            // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
            //"./src/Service",
          ],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin()
    ]
};
