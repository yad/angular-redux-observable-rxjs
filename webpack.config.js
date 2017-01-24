/// <binding ProjectOpened='Watch - Development' />
/**
 * Created by S626002 on 28/04/2016.
 */
var webpack = require("webpack");
var path = require("path");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var merge = require("webpack-merge");

/**
 * @const folders resolution
 * @type {{root: *, build: (any)}}
 */
const PATHS = {
    root: path.resolve('./src'),
    build: path.join(__dirname, "dist")
};

/**
 * Common fonfiguration
 * @type json
 */
const common = {
    resolve: {
        root: PATHS.root
    },
    entry: {
        index: './src/app/app.module.js',
        vendor: ['angular', 'angular-ui-router', 'ocLazyLoad', 'redux', 'ng-redux', 'redux-observable', 'rxjs']
    },
    output: {
        path: PATHS.build,

        // Filename for entry points
        // Only adds hash in build mode
        filename: '[name].bundle.js',

        // Filename for non-entry points
        // Only adds hash in build mode
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    babel: {
        presets: ['es2015']
    },
    module: {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel'],
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?root=."
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: PATHS.build + "/..",
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            inject: 'head',
            filename: 'index.html',
            template: './src/app/index.html',
            chunks: ['index', 'vendor']
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};

var config;

switch (process.env.npm_lifecycle_event) {
    /**
     * Production destination
     */
    case 'build' :
        config = merge(common, {
            devtool: 'source-map',
            plugins: [
                new webpack.optimize.UglifyJsPlugin()
            ]
        });
        break;
    /**
     * Testing
     */
    case 'test':
    case 'test:ci':
        config = merge(common, {
            entry: {},
            output: {},
            devtool: 'inline-source-map',
            isparta: {
                babel: {
                    presets: ['es2015']
                }
            },
            module: {
                preLoaders: [
                    {
                        test: /\.json$/,
                        loader: 'json',
						include: './'
                    }
                ]
            },
            plugins: []
        });
        break;
    /**
     * Development
     */
    default:
        config = merge(common, {});
        break;
}

module.exports = config;