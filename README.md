This module is based on https://github.com/yireo-training/Yireo_React.

# Install

Execute these commands to install all required dependencies.

```bash
npm install react react-dom prop-types
```

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader glob path webpack webpack-cli
```


Put this file in your root:

```javascript

// webpack.config.js

const path = require('path');
const glob = require('glob');

const appRoot = path.resolve(__dirname, 'app', 'code');

const entries = {};

const appPaths = glob.sync("app/code/*/*/view/*/src/*.define.js", {});
appPaths.forEach(file => {
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
        }
    };
};


```

Add these scripts to your package.json file:

```json

{
  ...
  "scripts": {
    "dev": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --node_modules ../../../node_modules --mode development && webpack --mode development",
    "watch": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --node_modules ../../../node_modules --mode development && webpack --watch --mode development",
    "build": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --node_modules ../../../node_modules --mode production && webpack --mode production"
  },
  ...
}

```

# Usage

See the [example directory](example/).
There will be an [example module](example/app/code/Elgentos/ExampleModule/) in the code directory.
