var path = require('path');
var hwp     = require('html-webpack-plugin');

var config = {
   mode: 'development',
   entry: ["@babel/polyfill", "./main.js"],
	
   output: {
      path:path.join(__dirname, 'build'),
      filename: 'build.js',
   },
	
   devServer: {
      inline: true,
      port: 8088,
      historyApiFallback: true,
      watchContentBase: true
   },
	
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
   },
   plugins:[
        new hwp({template:path.join(__dirname, 'index.html')})
    ]
}

module.exports = config;