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

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
`;

export default App;
