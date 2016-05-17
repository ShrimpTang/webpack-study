var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: path.resolve('js'),
    // entry: ['./utils.js', './app.js'],
    entry: {
        app: './app.js',
        about: './about_page.js',
        contact: './contact_page.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve('build/'),
        publicPath: '/public/assets/'
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ],
    devServer: {
        contentBase: 'public',
        port: 3333
    },
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files 
            exclude: /node_modules/, // exclude any and all files in the node_modules folder 
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.js/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            //  loader: 'style-loader!css-loader!sass-loader',
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader',
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png)$/,
            loader: 'url-loader?limit=10000',
            exclude: /node_modules/
        }, {
            test: /\.ttf$/,
            loader: "file-loader",
            exclude: /node_modules/
        }]
    }
}
