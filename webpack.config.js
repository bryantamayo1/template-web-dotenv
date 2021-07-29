const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./dev/js/main.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                type: "asset",
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/i
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './dev/index.html',
            minify: false
        }),
        new MiniCssExtractPlugin()
    ],
    mode: 'production'
}