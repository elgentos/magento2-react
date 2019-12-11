const path= require('path');

module.exports = (env, arg) => {
    return {
        entry: path.resolve(__dirname, 'index.js'),
        externals: ['mage/translate'],
        resolve: {
            modules: [arg.node_modules ? arg.node_modules : "../../node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/env'
                            ]
                        }
                    }
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, 'view/base/web/'),
            libraryTarget: "amd",
            filename: 'js/react.bundle' + (arg.mode === 'production' ? '.min' : '') + '.js'
        }
    };
};
