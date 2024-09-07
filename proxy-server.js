const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Proxy configuration
app.use('/api', createProxyMiddleware({
    target: 'https://krishsharma0413.pythonanywhere.com',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/api',
    },
    onProxyRes: (proxyRes) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.listen(3000, () => {
    console.log('Proxy server running at http://localhost:3000');
});
