const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: [
        path.join(__dirname, "src/index.js"),
        path.join(__dirname, "views/index.html"),
        path.join(__dirname, "views/typography.html")
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                "uglify"
            ]
        }, {
            test: /\.s[ac]ss$/,
            loaders: [
                "file?name=[name]-[hash].css",
                "extract",
                "css?sourceMap",
                "sass?sourceMap"
            ]
        }, {
            test: /\.html$/,
            loaders: [
                "file?name=[name].[ext]",
                "extract",
                "html?" + JSON.stringify({
                    attrs: ["link:href"]
                })
            ]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        })
    ]
};
