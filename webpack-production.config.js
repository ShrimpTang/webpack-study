var devConfig  = require('./webpack.config.js');
var stripLoader = {
	test:/\.js/,
	exclude:'node_modules',
	loader:'strip-loader?strip[]=console.log'
}

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;