const path = require('path');
const webpack = require('webpack');

module.exports = [
    {
        name: 'client',
        target: 'web',
        entry: [path.join(__dirname, 'client/index.js')],
        output: {
            path: path.join(__dirname, 'public/static'),
            filename: 'client.js',
            publicPath: '/static/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: {
                    warnings: false,
                    collapse_vars: true,
                    reduce_vars: true
                }
            })
        ],
        resolve: {
            modules: [
                path.join(__dirname), "node_modules"
            ],
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }, {
                            loader: 'eslint-loader'
                        }
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }, {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }, {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }, {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }, {
        name: 'server',
        target: 'node',
        entry: [path.join(__dirname, 'server/render.js')],
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'server.js',
            libraryTarget: 'commonjs2'
        },
        resolve: {
            modules: [
                path.join(__dirname), "node_modules"
            ],
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules\/)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }, {
                            loader: 'eslint-loader'
                        }
                    ]
                }, {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader'
                        }, {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }, {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'isomorphic-style-loader'
                        }, {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        }, {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }, {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }, {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        }
    }
]
