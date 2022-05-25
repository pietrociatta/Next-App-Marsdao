/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// next.config.js
const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* my next config */
});

module.exports = nextConfig;
