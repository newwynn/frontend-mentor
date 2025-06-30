const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/images/[name][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        },
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public'), to: path.resolve(__dirname, 'dist') },
        {
          from: path.resolve(__dirname, 'src/pages'),
          to: path.resolve(__dirname, 'dist/pages'),
          globOptions: {
            ignore: ['**/*.html'],
          },
        },
      ],
    }),
    ...[
      {
        template: './src/index.html',
        filename: 'index.html',
      },
      {
        template: './src/pages/interactive-rating-component/index.html',
        filename: 'pages/interactive-rating-component/index.html',
      },
      {
        template: './src/pages/blog-preview-card/index.html',
        filename: 'pages/blog-preview-card/index.html',
      },
      {
        template: './src/pages/social-links/index.html',
        filename: 'pages/social-links/index.html',
      },
      {
        template: './src/pages/faq-accordion/index.html',
        filename: 'pages/faq-accordion/index.html',
      },
      {
        template: './src/pages/results-summary-component/index.html',
        filename: 'pages/results-summary-component/index.html',
      },
      {
        template: './src/pages/product-preview-card/index.html',
        filename: 'pages/product-preview-card/index.html',
      },
    ].map(page => new HtmlWebpackPlugin(page)),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 3000,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  devtool: 'inline-source-map',
};
