module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: "assets/",
    filename: 'loading.bundled.js',
    libraryTarget: 'var',
    library: 'irl',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      }
    ],
  },
  externals: {
    "THREE": "THREE",
    "react": "React",
  },
};
