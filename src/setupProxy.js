/*
setupProxy.js
This file sets up the proxy addresses for the UI to use. Since it is accessing
multiple resources (tickets_api and verify.py) running on multiple different ports,
this file is the reference file for the node packages "http-proxy-middleware"
*/
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // proxy for verify.py (promo code verification)
    app.use(
        '/code',
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000',
            changeOrigin: true,
            pathRewrite: {
                '^/code' : '/'
            }
        })
    );

    // proxy for the tickets_api
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://127.0.0.1:3000',
            changeOrigin: true
        })
    );
};