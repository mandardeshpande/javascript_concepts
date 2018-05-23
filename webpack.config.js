module.exports = {
  mode: 'development',
  entry: { 'app': './public/js/app.js' },
  output: { publicPath: '/js', filename: 'bundle.js' },
  module: { rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'babel-loader',
          options: {
            presets: [ ['@babel/preset-env', {
              modules: false,
              targets: {
                "browsers": ["last 1 Chrome versions"]
              },
              exclude: [ 'transform-regenerator'],
            } ]],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        } ],
      },
    ]
  },
  devServer: { contentBase: "public", port: 3000 },
  devtool: 'source-map',
}