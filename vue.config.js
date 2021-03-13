module.exports = {
    configureWebpack: {
        resolve: {
            alias:{
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'fonts':'assets/img/fonts'
            }
        },
    },
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8443',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        host: '0.0.0.0'
    },
}