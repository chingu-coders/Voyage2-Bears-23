const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["../src/client/public/scss/"]
            }
          }
        ] //,
        // include: path.resolve(__dirname, '../src/client/public/scss/')

        // test: /.scss$/,
        // exclude: /node_modules/,
        // loaders: [
        //   { loader: 'style' },
        //   { loader: 'css' },
        //   { loader: 'postcss',
        //     options: {
        //       postcss: [ precss(), autoprefixer(), mqpacker() ],
        //     },
        //   },
        //   { loader: 'sass' }
        // ],
      }
    ]
  }
}
