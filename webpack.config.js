const path = require('path');

module.exports = (env, arg) => {
    return {
        entry: path.resolve(__dirname, 'index.js'),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, 'view/base/web/'),
            filename: 'js/react.bundle' + (arg.mode === 'production' ? '.min' : '') + '.js'
        }
    };
};
