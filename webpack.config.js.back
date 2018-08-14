var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
 resolve: {
  alias: {
   'vue$': 'vue/dist/vue.js'
  }
 },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
    postLoaders: [
      { test: /vue-icons/, loader: "callback-loader" }
    ]
    callbackLoader:
      require("vue-icons/icon-loader")(["fa-thumbs-up"])
  }
};