const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = {
    entry: {
        site: ["./src/js/index.js"],
        home: ["./src/css/home.scss"]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    watchOptions: {
        ignored: ["node_modules", "dist"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src/js"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", {
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    // Extracts CSS into separate files, one CSS file per JS file.
                    MiniCssExtractPlugin.loader,
                    // For relative "../" image urls to work in the scss style sheet, url must be set to false
                    { loader: "css-loader", options: { url: false } },
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: "source-map",
    externals: {
        // Using CDN for jQuery, so set it as "external" to prevent it from being included in the bundle.
        jquery: "jQuery"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // Puts vendor scripts and styles (from node_modules folder) in separate vendor.js and vendor.css files.
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    priority: 1,
                    // Optional: Setting enforce to true for this demo to always generate vendor.css.
                    // Otherwise, splitchunks.cacheGroups is ignored in production mode if the new chunk is less than the size of 30KB.
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/index.html" }
            ]
        }),
        // Extracts CSS into separate files, one CSS file per JS file.
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new RemovePlugin({
            // After compilation, removes these files (Webpack generates a js file for each css/scss file which isn't needed).
            after: {
                root: "./dist/js",
                include: [
                    "home.js",
                    "home.js.map"
                ],
                log: false,
                logWarning: false,
                trash: false
            }
        })
    ]
};