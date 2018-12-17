const pathJoinable = require('path');

const path = pathJoinable.join(__dirname, 'public').toString();
const pathForwardSlash = path.replace(/\\/g, '/');

//console.log(pathForwardSlash);

module.exports = {
    entry : './src/app.js',
    output: {
        //path: pathForwardSlash,
        path: path,
        filename: 'bundle.js'
    },
    module: {
        rules : [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase: path
    },
    mode : 'development'
};