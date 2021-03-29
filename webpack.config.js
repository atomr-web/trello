const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js",
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, "src/assets"),
        },
        extensions: [".ts", ".tsx", ".css", ".scss", ".json", ".js"],
    },
    devServer: {
        contentBase: "dist",
        compress: true,
        port: 4000,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
