module.exports = {
    entry: ['./utils.js', './app.js'],
    output: {
        filename: 'bundle.js'
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
        }]
    }
}
