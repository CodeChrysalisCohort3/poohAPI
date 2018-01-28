const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js' 
    },
    devServer: {
        contentBase: 'dist',
        port: 8080
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
        ]
    },
    resolve: {
        extensions: [' ', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify('http://localhost:1337')
          })
    ]

};