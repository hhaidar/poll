'use strict';

var path = require('path');

module.exports = {
    entry: path.join(__dirname, './components/client.jsx'),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        filename: path.join(__dirname, './assets/client.js')
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
