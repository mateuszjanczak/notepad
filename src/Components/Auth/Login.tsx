import React from "react";
import styled from "styled-components";
import Input from "../General/Input";
import Button from "../General/Button";
import AuthService from "../../Service/AuthService";
import { IError } from "../../Interfaces/IError";

class Login extends React.Component<{}, IState> {

    state = {
        username: "",
        password: "",
        error: false,
        errorMsg: ""
    }

    handleChange = (event: { target: { name: string; value: any; }; }) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as Pick<IState, keyof IState>);
    };

    handleClick = () => {
        const { username, password } = this.state;
        AuthService.executeJwtAuthenticationService(username, password)
            .then(data => AuthService.registerSuccessfulLoginForJwt(username, data.token))
            .catch(error => error.json().then((data: IError) => this.setState({error: true, errorMsg: data.errorMessage})))
    }

    render() {
        return (
            <Wrapper>
                {this.state.error && <Error>{this.state.errorMsg}</Error>}
                <Label>
                    <Input placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                </Label>
                <Label>
                    <Input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </Label>
                <Button onClick={this.handleClick}>log in</Button>
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
  justify-self: end;
  
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
  width: 30rem;
  padding: 0.25rem 1rem;
  background: #F39191;
  border: 1px solid #24292e;
`;

type IState = {
    username: string,
    password: string,
    error: boolean,
    errorMsg: string
}

export default Login;