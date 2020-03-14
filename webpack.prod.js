const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);
const components = resolve('src/components');
const common = require('./webpack.common.js');

console.log(components, 'wwwwwww');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: resolve('src/components'),
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: 'wzn-extendantd-components',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [new UglifyJsPlugin()],
});
