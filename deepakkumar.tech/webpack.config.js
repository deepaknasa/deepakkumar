var path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./app/polyfills.js', './app/styles.js', './app/main.js'],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['raw-loader']
            },
            //},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file?name=[name].[ext]' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'app.js'
    }
};
