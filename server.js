const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config.js');
const app = express();
const compiler = webpack(webpackConfig);
const bodyParser = require("body-parser");
const Page = require('./routes/auth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(express.static(__dirname + '/www'));

app.use('/api', Page)
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './www', 'index.html'));
});
 
const server = app.listen(4001, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});