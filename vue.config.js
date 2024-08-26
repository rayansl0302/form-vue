const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        exposes: {
          './CriarParceiro': './src/components/CriarParceiro.vue',
        },
        shared: {
          vue: { singleton: true, eager: true, requiredVersion: '^3.2.13' },
        },
      }),
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
