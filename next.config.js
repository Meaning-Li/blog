const withLess = require('next-with-less');
module.exports = withLess({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }); // 针对 SVG 的处理规则

    return config;
  }
});
