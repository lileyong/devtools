const { resolve } = require('path')
const webpack = require('webpack')

module.exports = function() {
    return {
        mode: 'production',
        entry: {
            vue: ['vue', 'vue-router'],
            element: ['element-ui'],
        },
        output: {
            filename: '[name].js',
            path: resolve(__dirname, '../dll'),
            library: '[name]_[chunkhash:8]',
        },
        plugins: [
            new webpack.DllPlugin({
                name: '[name]_[chunkhash:8]',
                path: resolve(__dirname, '../dll/manifest.json'),
            }),
        ],
    }
}
