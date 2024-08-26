const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  publicPath: "http://localhost:3000/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "vueApp",
        filename: "remoteEntry.js",
        exposes: {
          "./CriarParceiro": "./src/components/CriarParceiro.vue",
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: "3.4.38",
          },
        },
      }),
    ],
  },
  devServer: {
    port: 3000,
  },
};
