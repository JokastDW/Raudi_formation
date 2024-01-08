const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:"development",
  entry: './src/app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html'})],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
    open: true,
    hot: true,
    port: 8002,
    }
};