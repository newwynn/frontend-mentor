const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    rating: './src/scripts/interactive-rating-component/script.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@scripts': path.resolve(__dirname, 'src/scripts/'),
      '@assets': path.resolve(__dirname, 'public/assets/')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/interactive-rating-component/index.html',
      filename: 'pages/interactive-rating-component/index.html',
      chunks: ['rating'],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/',
      },
      {
        directory: path.join(__dirname, 'src'),
        publicPath: '/',
      }
    ],
    port: 5001,
    open: true,
    compress: true,
    hot: true,
    client: {
      overlay: true,
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/pages\/interactive-rating-component/, to: '/pages/interactive-rating-component/index.html' }
      ]
    }
  },
  mode: 'development',
};
