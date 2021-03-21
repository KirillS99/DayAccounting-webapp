/* eslint-disable */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'https://day-accounting.herokuapp.com',
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};
