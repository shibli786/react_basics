var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
   entry: './main.js',
	
   output: {
      filename: 'index.js',
   },
	     plugins: [HTMLWebpackPluginConfig],

   devServer: {
      inline: true,
      port: 8080
   },

	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

