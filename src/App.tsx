import React from 'react';
import './styles.css';
import GlobalStyle from "./Theme/Theme";
import Container from "./Views/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/Store/ConfigureStore";
import { AppContext } from './Context/AppContext';

class App extends React.Component {

    state = {
        authenticated: false,
        toggleAuthenticated: (isAuthenticated: boolean) => this._toggleAuthenticated(isAuthenticated)
    }

    _toggleAuthenticated = (isAuthenticated: boolean) => {
        this.setState({
            ...this.state,
            authenticated: isAuthenticated
        })
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Provider store={store}>
                    <BrowserRouter>
                        <GlobalStyle />
                        <Wrapper>
                            <Header />
                            <Container />
                        </Wrapper>
                        <Footer />
                    </BrowserRouter>
                </Provider>
            </AppContext.Provider>
        );
    }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
`;

export default App;
