'use strict';

var webpack           = require('webpack');
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var src  = path.join(__dirname, 'src');
var dest = path.join(__dirname, 'dest');

var config = {
    debug:     true,
    entry:     {
        index: path.join(src, 'index.js')
    },
    module:    {
        loaders: [
            {
                test:    /\.styl$/,
                loader:  ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!stylus-loader'),
                include: src
            }
        ]
    },
    output:    {
        path:       dest,
        publicPath: '/',
        filename:   '[name].js'
    },
    plugins:   [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ],
    resolve:   {
        extensions: ['', '.js', '.styl']
    },
    target:    'web'
};

module.exports = config;
