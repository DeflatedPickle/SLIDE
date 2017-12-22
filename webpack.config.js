var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, loaders: "style-loader!css-loader"}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "SLIDE",
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: "./src/index.html"
    })]
};