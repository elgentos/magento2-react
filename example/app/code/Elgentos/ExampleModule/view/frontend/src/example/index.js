import App from "./containers/App";

export default (element, props) => {
    ReactDOM.render((
        <App {...props}/>
    ), element);
};
