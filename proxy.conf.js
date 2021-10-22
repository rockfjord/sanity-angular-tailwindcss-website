const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://xyu1evsb.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;