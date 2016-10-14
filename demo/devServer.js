var koa = require('koa');
var app = koa();
var serveViews = require('koa-front-matter-views');
var serve = require('koa-static');
var send = require('koa-send');
var accesslog = require('koa-accesslog');
var _ = require('koa-route');
var moment = require('moment')

app.use(accesslog());

var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev.js');
var compiler = webpack(webpackConfig);
var hotMiddleware = require("webpack-hot-middleware")(compiler);

var webpackMiddleware = require("koa-webpack-dev-middleware");
app.use(webpackMiddleware(compiler, {
  noInfo: false,
  lazy: false,
  publicPath: webpackConfig.output.publicPath
}))

app.use(function* (next) {
  yield hotMiddleware.bind(null, this.req, this.res);
  yield next;
});

// serve generate pages
app.use(serveViews({ defaults: {
  __DEV__: true,
  __ts__: moment().format('YYYY-MM-DD')
}}))

// serve static assets
app.use(serve('.'));

// serve the index.html page
app.use(function *(){
  yield this.serveView('index')
})

app.listen(3000);
