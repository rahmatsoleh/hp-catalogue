const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.src\.js$/,
                loader: 'minify-template-literal-loader',
                options: {
                  caseSensitive: true,
                  collapseWhitespace: true
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
})