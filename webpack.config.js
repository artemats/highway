const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ["absolute/path/a", "absolute/path/b"]
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        // https: true
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/html', 'index.html'),
            minify: {
                collapseWhitespace: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'option.html',
            template: path.resolve(__dirname, 'src/html', 'option.html'),
            minify: {
                collapseWhitespace: false
            }
        }),
        // new CleanWebpackPlugin(),
    ],
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    // optimization: {
    //     minimizer: [new TerserPlugin({ /* additional options here */ })],
    // },
};