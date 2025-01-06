const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Replace with your entry file
  output: {
    filename: 'bundle.js',  // This is the output file name
    path: path.resolve(__dirname, 'dist'),  // This is the output directory
  },
  devServer: {
    contentBase: './dist',  // Folder to serve content from
    port: 9000,  // You can choose any available port
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // Use Babel to transpile JS if needed
            },
        },
      }
      // Add other rules if necessary (for styles, images, etc.)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your source HTML file
      filename: 'index.html',
        }
    )
    ]
};
