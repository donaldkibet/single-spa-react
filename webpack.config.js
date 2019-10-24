const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode:"development",
    entry:{
        //set the single spa config as the project entry point
        "single-spa.config":"./single-spa.config.js"
    },
    output:{
        publicPath: "/dist/",
        filename:"[name].js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.js$/,
                exclude:[path.resolve(__dirname,"node_modules")],
                loader:"babel-loader"
            },
            {
                // plugin to allow us to use angularjs application
                test:/\.html$/,
                exclude:path.resolve(__dirname,"node_modules")
            }
        ]
    },
    node:{
        fs:"empty"
    },
    resolve:{
        modules:[path.resolve(__dirname,"node_modules")]
    },
    plugins:[
        // A webpack plugin to remove/clean the output folder before building
        new CleanWebpackPlugin()
    ],
    devtool:"source-map",
    externals:[],
    devServer:{
        historyApiFallback:true
    }
}