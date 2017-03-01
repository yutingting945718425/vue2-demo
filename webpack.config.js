var path = require("path");
var webpack = require("webpack");
module.exports={
    entry:"./src/main.js",
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:"dist"
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer:{
        clientLogLevel:"none"
    }
};