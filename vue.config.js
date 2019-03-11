module.exports = {
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://www.jqyzone.cn',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // }
        proxy: 'http://www.jqyzone.cn',
    }
}