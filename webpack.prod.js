const path = require('path');
const webpack = require('webpack');

const config = {
   bail: true,
   mode: 'production',
   devtool: 'none',
   entry: ["@babel/polyfill", "./main.js"],
   output: {
      path:path.join(__dirname, 'build'),
      filename: 'build.js',
   },
   plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
               loader: 'babel-loader',
               query: {
                  presets: ['es2015', 'react', 'stage-0']
               }
            }]
         }
      ]
   }
}

module.exports = config;