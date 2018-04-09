var path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/main.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['raw-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'app.js'
    }
};
