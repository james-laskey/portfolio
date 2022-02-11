const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var env = process.env.WEBPACK_ENV;
module.exports = {
    target: 'node',
    externals: {
        React: 'react'
    },
    entry: [path.resolve(__dirname, "src", "comps", "Layout.jsx")

    ],
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',

            },
          ],
        },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
       ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash]-[name].[ext]',
            },
          },
        ]
      }
        ]
    },
    mode: "development",
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
      template: "./src",
      filename: "./src"
    })
    ],
    devServer: {
        contentBase: "./",
        hot: true,
        historyApiFallback: true
    },

};