const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/** @type {import('webpack').Configuration} */

module.exports = {
    entry: "./dev/js/main.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './dev/index.html'
        })
    ],
    mode: 'production'
}