const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = file => path.resolve(__dirname, file)
const fs = require('fs')
const isDev = process.env.NODE_ENV === 'development'

const laravelMixFilePath = './public/mix-manifest.json'
if (fs.existsSync(laravelMixFilePath)) {
  fs.unlinkSync(laravelMixFilePath)
}

module.exports = {
  entry: {
    app: './frontend/entry.js',
    vendor: [
      'vue',
      'vuex',
      'vue-router',
    ]
  },
  output: {
    path: resolve('./public/assets/img'),
    publicPath: '/assets/img/',
    filename: '../js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      '~': resolve('./frontend'),
      'view': resolve('./frontend/views'),
      'assets': resolve('./frontend/assets'),
      'component': resolve('./frontend/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              extractCSS: !isDev,
              loaders: {
                scss: ExtractTextPlugin.extract({
                  fallback: 'vue-style-loader',
                  use: [
                    'css-loader',
                    'sass-loader',
                    {
                      loader: 'sass-resources-loader',
                      options: {
                        resources: [
                          resolve('./frontend/assets/css/variables.scss'),
                          resolve('./frontend/assets/css/mixins.scss')
                        ]
                      }
                    }
                  ]
                })
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash:8]'
        }
      },
      {
        test: /\.scss$/,
        use: isDev
          ? ['vue-style-loader', 'css-loader']
          : ExtractTextPlugin.extract({
            use: 'css-loader?minimize',
            fallback: 'vue-style-loader'
          })
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '../fonts/[name].[ext]?[hash:8]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css'),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) &&
          !/\.css$/.test(module.request)
        )
      }
    }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(zh-cn)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new webpack.ProvidePlugin({
      moment: 'moment'
    }),
    new CopyWebpackPlugin([
      { from: resolve('./frontend/assets/img'), to: resolve('./public/assets/img') }
    ])
  ],
  stats: {
    children: false
  }
}
