const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        // clean: true,
        clean: { keep: /iKmanifestDir/ },
        // publicPath: "/static/",
    },
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [`...`, new CssMinimizerPlugin()],
        // splitChunks: { chunks: "all" }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"],
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css",
            linkType: "text/css",
        }),
        new HtmlWebpackPlugin({
            title: "production ilshady calculator",
            template: "src/index.hbs",
            meta: {
                viewport: "width=device-width, initial-scale=1",
                description: "iK my personal calculator",
                keywords: "iK calculator rechadsalma",
            },
            publicPath: "/",
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5000000,
        }),
    ],
};
