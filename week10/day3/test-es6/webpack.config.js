
let path = require('path')
let htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //入口的文件
    entry: './src/main.js',
    //出口的位置和文件
    output: {
        //必须是绝对路径
        path: path.resolve(__dirname, './dist'),
        filename: 'bounld.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(jpg|png|jpeg))$/, use: 'url-loader?limit=8000' },
            { test: /\.vue$/, use: 'vue-loader' },

        ]
    },
    Plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}

// console.log();