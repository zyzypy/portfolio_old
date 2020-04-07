// 此文件于项目无关
// webpack别名 已被vue-cli3生成的项目内置，但webstorm不识别，在设置里添加配置文件
// https://www.cnblogs.com/lhuser/p/11753939.html
'use strict'
const path = require('path')

module.exports = {
    context: path.resolve(__dirname, './'),
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve('src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@comp': path.resolve(__dirname, 'src/components'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@plug': path.resolve(__dirname, 'src/plugins'),
            '@utils': path.resolve(__dirname, 'src/utils')
        }
    }
}