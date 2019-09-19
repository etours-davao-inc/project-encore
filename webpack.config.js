module.exports = {
  entry: {
    create: './index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    library: "create",
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: './'
  },
  watch: true,
  devtool: 'source-map'
};