const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: { keep: /iKmanifestDir/ },
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            // {
            // 	test: /\.m?js$/,
            // 	exclude: /node_modules/,
            // 	use: {
            // 		loader: "babel-loader"
            // 	}
            // },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ilshady calculator",
            template: "src/index.hbs",
            meta: {
                viewport: "width=device-width, initial-scale=1",
                description: "iK my personal calculator",
                keywords: "iK calculator rechadsalma",
            },
        }),
        // new WorkboxPlugin.GenerateSW({
        //     // these options encourage the ServiceWorkers to get in there fast
        //     // and not allow any straggling "old" SWs to hang around
        //     // clientsClaim: true,
        //     // skipWaiting: true,
        //     maximumFileSizeToCacheInBytes: 5000000,
        // }),
    ],
};
