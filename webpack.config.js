// IMPORTS
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// CONFIG
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // BABEL LOADER
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-env'] }
            },
            // SASS LOADER
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/html/template.html'),
            title: 'React App',
            minify: true
        })
    ]
}