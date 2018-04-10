/// <binding BeforeBuild='Run - Development' />
var path = require('path');
const webpack = require('webpack');

module.exports = {
    stats: { warnings: false },
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
    resolve: {
        modules: [
            path.join(__dirname, "./app/custom"),
            "node_modules"
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.join(__dirname, './app'),
            {}
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })],
    output: {
        path: path.resolve(__dirname, 'wwwroot'),
        filename: 'app.js'
    }
};
