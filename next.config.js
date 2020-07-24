const withCSS = require("@zeit/next-css");
const withImages = require("next-images");

module.exports = withCSS(
  withImages({
    env: {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
    },
  })
);
