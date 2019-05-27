

module.exports = {
  mode: 'production',

  entry: __dirname + '\\app\\main.js',
  output: {
    path: __dirname + '\\public',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: '.\\public',
    historyApiFallback: true,
    inline: true
  },

  module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                },{
                    loader: "postcss-loader"
                },{
                    loader: "sass-loader"
                }
            ]
        }
    ]
}
}