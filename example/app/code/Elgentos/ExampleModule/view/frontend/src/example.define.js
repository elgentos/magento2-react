define(["magento2-react"], () => {
    return (element, props) => {
        if (typeof element !== "object") {
            return;
        }

        require('./example').default(element, props);
    };
});
