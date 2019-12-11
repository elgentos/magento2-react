define(["mage/translate"], (translate) => {
    console.log('react222', translate);
    window.React = require("react");
    window.ReactDOM = require("react-dom");
    window.PropTypes = require("prop-types");

    // Setting the ReactContainer
    window.MagentoContainerContext = React.createContext({
        require: requirejs,
        translate
    });
});
