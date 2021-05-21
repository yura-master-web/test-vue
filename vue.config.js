const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    lintOnSave: 'warning',
    configureWebpack: {
        plugins: [
            new CopyPlugin({
                patterns: [{from: 'src/assets/img', to: 'img'}],
            }),
        ],
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'stylus',
            patterns: [
                path.resolve(__dirname, './src/assets/style/optimize.styl'),
                path.resolve(__dirname, './src/assets/style/total.styl'),
            ],
        },
    },
    /*
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    path.resolve(__dirname, 'src/assets/style/optimize.styl'),
                    path.resolve(__dirname, 'src/assets/style/total.styl'),
                ],
            },
        },
    },
    */
}
