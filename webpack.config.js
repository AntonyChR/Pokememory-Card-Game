const path = require('path');
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'Public')
    },
    devServer: {
        port: 3000,
        static: path.join(__dirname, 'Public'),
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