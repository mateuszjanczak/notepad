import React from "react";
import styled from "styled-components";
import {Redirect} from 'react-router-dom'
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import {routes} from "../Routes/Routes";

class Auth extends React.Component {

    state = {
        redirect: false
    }

    toggleRedirect = () => {
        this.setState({
            ...this.state,
            redirect: true
        })
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <Heading>Sign in</Heading>
                </div>
                <Container>
                    <Login toggleRedirect={this.toggleRedirect}/>
                    <Register toggleRedirect={this.toggleRedirect}/>
                </Container>
                {this.state.redirect && <Redirect to={routes.homepage} />}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`

`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin: 3rem 0;
  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Auth;