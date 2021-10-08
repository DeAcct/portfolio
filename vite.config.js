const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        sub: resolve(__dirname, "sub/index.html"),
      },
    },
    outDir: "../dist",
  },
};
