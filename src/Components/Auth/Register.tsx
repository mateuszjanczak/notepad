import React from "react";
import styled from "styled-components";
import Input from "../General/Input";
import Button from "../General/Button";

class Register extends React.Component {
    render() {
        return (
            <Wrapper>
                <Label>
                    <Input placeholder="email"/>
                </Label>
                <Label>
                    <Input placeholder="username"/>
                </Label>
                <Label>
                    <Input placeholder="password"/>
                </Label>
                <Button>register</Button>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  display: grid;
  border: 1px solid #333;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
  padding: 2.5rem 5rem;
  justify-items: center;
  align-self: start;
  justify-self: start;
  
  @media (max-width: 992px) {
    justify-self: center;
  }
  
  @media (max-width: 575px) {
    justify-self: unset;
  }
`;

const Label = styled.div`
  margin: 1rem;
`;

const Error = styled.div`
  padding: 0.3rem 1rem;
  background: #F39191;
  border-left: 1px solid #24292e;
  border-right: 1px solid #24292e;
  border-bottom: 1px solid #24292e;
`;


export default Register;