import React from 'react';
import './styles.css';
import GlobalStyle from "./Theme/Theme";
import Container from "./Views/Container";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <Container />
            </Wrapper>
            <Footer />
        </>
    );
  }
}

const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
`;

export default App;
