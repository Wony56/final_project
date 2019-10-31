module.exports = {
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://52.79.199.186:8080"
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
