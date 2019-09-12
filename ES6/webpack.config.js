const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/')
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: "babel-loader" },

      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'] 
  }
};