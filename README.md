This module is based on https://github.com/yireo-training/Yireo_React.

# Install

## Module

To install the module simply include run this line:

```bash
composer require elgentos/magento2-react
```

## NPM Dependencies

To install the npm dependencies you could rename the `package.json.sample` to `package.json` and run:

```bash
npm install
```

Another option is to walk through these steps:

1) execute these commands:

```bash
npm install react react-dom prop-types
```

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader glob path webpack webpack-cli
```

2) add these scripts to your `package.json` file:

```json

{
  ...
  "scripts": {
    "dev": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --mode development && webpack --mode development",
    "watch": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --mode development && webpack --watch --mode development",
    "build": "webpack --config vendor/elgentos/magento2-react/webpack.config.js --mode production && webpack --mode production"
  },
  ...
}

```

## Webpack Config

For your webpack configuration you can rename the `webpack.config.js.sample` to `webpack.config.js` or you can insert/integrate this [config](example/webpack.config.js) by hand.

# Usage

## Example

See the [example directory](example/).
There will be an [example module](example/app/code/Elgentos/ExampleModule/) in the code directory.

## Build

After you have created a component based on the given example you can run these commands:

```bash
npm run dev # for running a development build
```

```bash
npm run watch # for continually watching your files on changes
```

```bash
npm run build # for running a production build
```

# Translations and RequireJS functions

To abstract some of the default magento javascript functions there is a context added with these functions.
You can use this context with this JSX: 

```javascript

export default ({children}) => (

    <MagentoContainerContext.Consumer>
        {({translate, require}) => children(translate, require.toUrl)}
    </MagentoContainerContext.Consumer>
);

```
