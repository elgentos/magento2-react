import Wrapper from "../components/Wrapper";

class App {
    render() {
        return (
            <MagentoContainerContext.Consumer>
                {({translate, require}) => (
                    <Wrapper>
                        {this.props.foo}

                        <img
                            src={require.toUrl("Elgentos_Example/images/logo.svg")}
                            alt={translate("The Elgentos Logo")}
                        />
                    </Wrapper>
                )}
            </MagentoContainerContext.Consumer>
        );
    }
}

App.propTypes = {
    foo: PropTypes.string
};

export default App;
