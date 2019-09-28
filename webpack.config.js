const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const webpackConfig = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'js/main.js'),
    devServer: {
        port: 9000,
        open: true,
        overlay: {
            errors: true
        }
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx|vue)$/,
            exclude: /js\/clipboard\.js/,
            loader: 'eslint-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.styl/,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                'stylus-loader'
            ]
        }, {
            test: /\.(jpg|jpeg|png|svg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }]
        }, {
            test: /\.(ttf|eot|woff)$/,
            loader: 'file-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            title: 'ERP开发者工具',
            meta: {
                keywords: 'ERP, 开发者, 工具',
                description: 'ERP开发者工具,解放ERP开发中的重复劳动'
            },
            favicon: './img/tuboss.png'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}

if (isDev) {
    webpackConfig.devtool = '#cheap-module-eval-source-map'
} else {
    webpackConfig.entry = {
        app: path.join(__dirname, 'js/main.js'),
        vendor: ['vue', 'element-ui']
    }
    webpackConfig.output.filename = '[name].[chunkhash:8].js'
    webpackConfig.plugins.push(
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash:8].css',
            chunkFilename: '[id].css'
        })
    )
    webpackConfig.optimization = {
        splitChunks: {
            name: 'vendor',
            chunks: 'all'
        }
    }
}

module.exports = webpackConfig
