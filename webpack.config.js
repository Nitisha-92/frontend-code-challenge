const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 35',
  'Firefox >= 31',
  'Explorer >= 9',
  'iOS >= 7',
  'Opera >= 12',
  'Safari >= 7.1'
]
module.exports = {
  entry: ['./src/app/script/app.js'],
  target: 'web',
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'isomorphic-style-loader',
          { loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: (bundler) => ([
                require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })
              ])
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Js app",
      template: "./src/app/index.html"
    })
  ],
};