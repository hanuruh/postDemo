const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    context: path.join(__dirname, 'src'),
    output: {
        filename: "bundle.js",
        path: path.resolve("dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            /*Choose only one of the following two: if you're using
            plain CSS, use the first one, and if you're using a
            preprocessor, in this case SASS, use the second one*/
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
    ]
}