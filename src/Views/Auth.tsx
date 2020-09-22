import React from "react";
import styled from "styled-components";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

class Auth extends React.Component {
    render() {
        return (
            <Wrapper>
                <div>
                    <Heading>Sign in</Heading>
                </div>
                <Container>
                    <Login />
                    <Register />
                </Container>
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Auth;