/// <binding BeforeBuild='Run - Development' />
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AotPlugin = require('@ngtools/webpack').AotPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);
  const sharedConfig = {
    mode: 'development',
    stats: { warnings: false, modules: false },
    context: __dirname,
    resolve: { extensions: ['.js', '.ts'] },
    output: {
      filename: '[name].js',
      publicPath: 'dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
      rules: [
        { test: /\.ts$/, use: isDevBuild ? ['ts-loader', 'angular2-template-loader', 'angular2-router-loader'] : '@ngtools/webpack' },
        { test: /\.html$/, use: 'html-loader?minimize=false' },
        { test: /\.css$/, use: ['to-string-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] },
        { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
      ]
    },
    
    plugins: [
      new CheckerPlugin()
    ]
    //output: {
    //  path: path.resolve(__dirname, 'wwwroot'),
    //  filename: '[name].js'
    //}
    
  }
  const clientBundleOutputDir = './wwwroot/dist';
  const clientBundleConfig = merge(sharedConfig, {
    entry: {
      'polyfills': './ClientApp/common/polyfills.ts',
      'main-client': './ClientApp/boot/boot.browser.ts'
    },
    output: { path: path.join(__dirname, clientBundleOutputDir) },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./wwwroot/dist/vendor-manifest.json')
      })
    ].concat(isDevBuild ? [
      // Plugins that apply in development builds only
      new webpack.SourceMapDevToolPlugin({
        filename: '[file].map', // Remove this line if you prefer inline source maps
        moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
      })
    ] : [
        // Plugins that apply in production builds only
        new webpack.optimize.UglifyJsPlugin(),
        new AotPlugin({
          tsConfigPath: './tsconfig.json',
          entryModule: path.join(__dirname, 'ClientApp/app/app.browser.module#AppModule'),
          exclude: ['./**/*.server.ts']
        })
      ])
  });

  // Configuration for server-side (prerendering) bundle suitable for running in Node
  const serverBundleConfig = merge(sharedConfig, {
    resolve: { mainFields: ['main'] },
    entry: { 'main-server': './ClientApp/boot/boot.server.ts' },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./ClientApp/dist/vendor-manifest.json'),
        sourceType: 'commonjs2',
        name: './vendor'
      })
    ].concat(isDevBuild ? [] : [
      // Plugins that apply in production builds only
      new AotPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: path.join(__dirname, 'app/app.server.module#AppModule'),
        exclude: ['./**/*.browser.ts']
      })
    ]),
    output: {
      libraryTarget: 'commonjs',
      path: path.join(__dirname, './ClientApp/dist')
    },
    target: 'node',
    devtool: 'inline-source-map'
  });

  return [clientBundleConfig, serverBundleConfig];
};
