const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import * as CopyWebpackPlugin from 'copy-webpack-plugin'
import * as HappyPack from 'happypack'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import * as path from 'path'
import * as Uglify from 'uglifyjs-webpack-plugin'
import * as webpack from 'webpack'
import * as WebpackBar from 'webpackbar'
import { babelLoader, baseConfig } from './base.config'
import { cssUse } from './css'
import { isDev, isHot, rootDir } from './tools'

const appConfig: webpack.Configuration & { devServer: any } = {
  ...baseConfig,

  entry: {
    bundle: ['./src']
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /^\?raw$/,
            use: [
              isHot ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          },
          {
            use: isHot
              ? ['style-loader', ...cssUse]
              : [MiniCssExtractPlugin.loader, ...cssUse]
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: !isDev
          ? 'happypack/loader?id=tsx'
          : [
              babelLoader,
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  experimentalWatchApi: true
                }
              }
            ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              emitFile: true,
              limit: 8092,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/theme/fonts', to: 'fonts' }
    ]),

    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, '../src/tsconfig.json'),
      checkSyntacticErrors: true
    }),

    ...(isHot
      ? []
      : [
          new MiniCssExtractPlugin({
            filename: '[name].css'
          })
        ]),

    ...(isDev
      ? [new webpack.HotModuleReplacementPlugin(), new WebpackBar()]
      : [
          new HappyPack({
            id: 'tsx',
            loaders: [
              babelLoader,
              {
                loader: 'ts-loader',
                options: {
                  happyPackMode: true
                }
              }
            ]
          }),
          new webpack.optimize.OccurrenceOrderPlugin(false)
        ])
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },

    minimize: !isDev,
    minimizer: [
      new Uglify({
        parallel: true,
        uglifyOptions: {
          output: {
            comments: /license|@preserve|@license|@cc_on/gi
          }
        }
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },

  performance: {
    hints: false
  },

  stats: {
    modules: false,
    children: false
  },

  // CSS file mapping not allowed
  // To allow file mapping for CSS use 'source-map'
  devtool: (isDev && 'cheap-module-eval-source-map') || undefined,

  devServer: {
    hot: true,
    inline: true,
    contentBase: [
      path.join(rootDir, './views')
    ],
    port: 5005,
    historyApiFallback: true,
    publicPath: '/'
  }
}

// tslint:disable-next-line:no-default-export
export default appConfig