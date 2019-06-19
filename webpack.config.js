const path = require('path');


module.exports = {
    entry: {
        index: './src/scripts/index.js',
    },
    // watch: true,
    // watchOptions: {
    //   aggregateTimeout: 300,
    //   poll: 1000, 
    //   ignored: /node_modules/,
    // },
    // devtool: 'source-maps',
    // devServer: {
    //   contentBase: path.join(__dirname, 'src'),
    //   watchContentBase: true,
    //   hot: true,
    //   open: true,
    //   inline: true,
    //   writeToDisk:true
    // },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }],
            }

        ]
    }
};