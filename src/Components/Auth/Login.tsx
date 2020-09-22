import React from "react";
import styled from "styled-components";
import Input from "../General/Input";
import Button from "../General/Button";

class Login extends React.Component {
    render() {
        return (
            <Wrapper>
                <Label>
                    <Input placeholder="username"/>
                </Label>
                <Label>
                    <Input placeholder="password"/>
                    {true && <Error>Incorrect password</Error>}
                </Label>
                <Button>log in</Button>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  display: grid;
  border: 1px solid #333;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
  padding: 2rem;
  justify-items: center;
  align-self: start;
  justify-self: end;
  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const Label = styled.div`
  margin: 1rem;
`;

const Error = styled.div`
  padding: 0.25rem 1rem;
  background: #F39191;
  border-left: 1px solid #24292e;
  border-right: 1px solid #24292e;
  border-bottom: 1px solid #24292e;
`;

export default Login;