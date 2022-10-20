/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");
const path = require("path");

(module.exports = nextConfig),
  withPlugins([
    withCss({}),
    withImages({}),
    withReactSvg({
      include: path.resolve(__dirname, "./public/images"),
      webpack(config, options) {
        return config;
      },
    }),
  ]);
