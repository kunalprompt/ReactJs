var path = require("path");

var config = {
   entry: './src/index.js',
   output: {
      path: path.resolve(__dirname, 'dest'),
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ["es2015", "react"]
            }
         }
      ]
   }
}

module.exports = config;
