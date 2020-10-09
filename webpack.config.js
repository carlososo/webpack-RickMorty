const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    module:{
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader:"html-loader",
                        options: {minimize:true},
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
                test:/\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test:/\.(png|jpg|svg|gif|jpeg|webp)$/,
                use:["file-loader"],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename: "./index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/404.html",
            filename: "./404.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[html].scss",
            chunkFilename: "[id].css",
        }),
    ],
};