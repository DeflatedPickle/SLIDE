var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            {
                test: /\.pug$/,
                use: ["html-loader", "pug-html-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "SLIDE",
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: "./src/index.pug"
        }),

        new ExtractTextPlugin("index.css")
    ]
};