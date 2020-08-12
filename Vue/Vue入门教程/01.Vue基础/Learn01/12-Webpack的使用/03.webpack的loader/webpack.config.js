const path = require('path'); //nodejs 中的自带包
// 想用 nodejs 中的包，需要初始化一下项目
// 命令为： npm init

module.exports = {
    entry: './src/main.js', //入口
    output: {               //出口，使用绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}