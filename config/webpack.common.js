const path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, '../dist'),
    },
    module:{
        rules:[
            {
                test:/\.js/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            }
        ]
    }

}