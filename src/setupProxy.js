/* eslint-disable */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://day-accounting.herokuapp.com',
      changeOrigin: true,
    })
  );
};
