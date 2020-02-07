define(["mage/translate", "react", "react-dom", "prop-types"], (translate, React, ReactDOM, PropTypes) => {
    window.React = React;
    window.ReactDOM = ReactDOM;
    window.PropTypes = PropTypes;

    // Setting the ReactContainer
    window.MagentoContainerContext = React.createContext({
        require: requirejs,
        __: translate
    });
});
