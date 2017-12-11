const server = require('server');
const { modern } = server.utils;


const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const config = require('../../webpack.config.dev.js');

    const compiler = webpack(config);

    module.exports = [
        modern(webpackDevMiddleware(compiler)),
        modern(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client'))),
        modern(webpackHotServerMiddleware(compiler))
    ]
} else {

    const renderPage = require('../../public/server.js').default;
    module.exports = [
        modern(renderPage()),
    ]
}
