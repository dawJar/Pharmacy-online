var debug             = process.env.NODE_ENV !== "production";
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path              = require('path');
// var babelrc           = require('./.babelrc');

module.exports = {
    context: __dirname,
    entry: './src/js/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0'],
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.woff$/,
            loader: "url-loader?prefix=font/&limit=5000"
        }, {
            test: /\.woff2$/,
            loader: "url-loader?prefix=font/&limit=5000"
        }, {
            test: /\.(eot|ttf|svg|gif|png)$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'webpack-ejs-template',
            template: './src/index-template.ejs'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}
