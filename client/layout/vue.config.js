const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const remotes = require('./mf.remotes');
const exposes = require('./mf.exposes');
module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  devServer: {
    /**
     * * Порт локальной разработки текущего приложения
     */
    port: 3020,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'shell',
        filename: 'remoteEntry.js',
        remotes: remotes,
        exposes: exposes,
        shared: {
          vue: {
            singleton: true,
            eager: true,
          },
          pinia: {
            singleton: true,
            eager: true,
          },
        },
      }),
    ],
  },
});
