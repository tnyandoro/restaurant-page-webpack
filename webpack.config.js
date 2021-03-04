const path = require('path')

const mode = process.env.NODE_ENV ===  'development';
// Temporary workaround for browserslist a bug thats being patched in the near future
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

module.exports = {
  // mode default set to production if not set
  mode: mode, 

  // entry not required if using './src/index.js' default
  // out not required if using 'dist/main.js' default
  module: {
        rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           // without additional settings , this will reference. babelrc
           loader: 'babel-loader'
         }
      }
    ]
  },
  target: 'web',
  devtool: 'source-map',

  devServer: {
    contentBase: './dist'
  }
};

