const path = require('path');
const glob = require('glob');
const uglify = require('uglifyjs-webpack-plugin');

const appRoot = path.resolve(__dirname, 'app', 'code');

const entries = {};

const codePaths = glob.sync("app/code/*/*/view/*/src/*.define.js", {});
codePaths.forEach(file => {
    const relativeFile = path.relative(appRoot, file);
    entries[path.dirname(path.dirname(relativeFile)) + '/web/js/' + path.basename(file.replace('.define.js', ''))] = "./" + file;
});

const designPaths = glob.sync("app/design/*/*/*/*/src/*.define.js", {});
designPaths.forEach(file => {
    const relativeFile = path.relative(appRoot, file);
    entries[path.dirname(path.dirname(relativeFile)) + '/web/js/' + path.basename(file.replace('.define.js', ''))] = "./" + file;
});

const vendorPaths = glob.sync("vendor/*/*/view/*/src/*.define.js", {});
vendorPaths.forEach(file => {
    const relativeFile = path.relative(appRoot, file);
    entries[path.dirname(path.dirname(relativeFile)) + '/web/js/' + path.basename(file.replace('.define.js', ''))] = "./" + file;
});

if (Object.keys(entries).length === 0) {
    console.error('ERROR: There are no valid files to compile!');
}

module.exports = (env, arg) => {
    return {
        devtool: 'inline-source-map',
        entry: entries,
        externals: ["magento2-react"],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                '@babel/react',
                                '@babel/env'
                            ]
                        }
                    }
                },
            ]
        },
        output: {
            path: appRoot,
            libraryTarget: "amd",
            filename: '[name]' + (arg.mode === 'production' ? '.min' : '') + '.js'
        },
        optimization: {
            minimizer: [
                new uglify({
                    uglifyOptions: {
                        mangle: {
                            reserved: ['__']
                        }
                    }
                })
            ]
        }
    };
};
