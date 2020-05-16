const path = require('path');

const SRC_DIRS = [
  path.join(__dirname, '..', 'review_service', 'client'),
  path.join(__dirname, '..', 'Recommended-Services', 'client'),
  path.join(__dirname, '..', 'details-service', 'client'),
  path.join(__dirname, '..', 'Carousel-Images', 'client'),
  path.join(__dirname, '..', 'addToCart-service',  'client', 'src'),
];
const DIST_DIR = path.join(__dirname, '/bundles/');

module.exports = {
  entry: {
    reviews: path.join(__dirname, '..', 'review_service', 'client', 'index.jsx'),
    recommended: path.join(__dirname, '..', 'Recommended-Services', 'client', 'recommendedCarousel.jsx'),
    details: path.join(__dirname, '..', 'details-service', 'client', 'index.jsx'),
    carousel: path.join(__dirname, '..', 'Carousel-Images', 'client', 'imageCarousels.jsx'),
    addtocart: path.join(__dirname, '..', 'addToCart-service',  'client', 'src', 'app.jsx'),
  },
  output: {
    filename: '[name].[contentHash].app.js',
    path: DIST_DIR,
    sourceMapFilename: 'app.js.map',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIRS,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '..', 'review_service', 'node_modules'),
      path.join(__dirname, '..', 'Recommended-Services', 'node_modules'),
      path.join(__dirname, '..', 'details-service', 'node_modules'),
      path.join(__dirname, '..', 'Carousel-Images', 'node_modules'),
      path.join(__dirname, '..', 'addToCart-service', 'node_modules'),
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    }
  }
};
