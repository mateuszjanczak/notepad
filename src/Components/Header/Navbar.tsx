import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {routes} from "../../Routes/Routes";
import AuthService from "../../Service/AuthService";

class Navbar extends React.Component {

    state = {
        isLogged: false
    }

    componentDidMount() {
        const isLogged = AuthService.isLogged();

        this.setState({
            isLogged
        })
    }

    handleClick = () => {
        this.setState({
            isLogged: !this.state.isLogged
        })
    }

    render() {
        const renderLink = () => {
            return this.state.isLogged ? (
                <Link as={NavLink} to={routes.logout} onClick={this.handleClick}>Logout</Link>
            ) : (
                <Link as={NavLink} to={routes.login}>Sign In</Link>
            );
        };

        return (
            <Nav>
                <List>
                    <Item>
                        <Link as={NavLink} to={routes.notes}>List</Link>
                    </Item>
                    <Item>
                        <Link as={NavLink} to={routes.create}>New Note</Link>
                    </Item>
                </List>
                <List>
                    <Item>
                        {renderLink()}
                    </Item>
                </List>
            </Nav>
        )
    }
}

const Nav = styled.nav`
  color: #eee;
  background: #24292e;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.button`
  color: #eee;
  text-decoration: none;
  padding: 14px 16px;
  &:hover {
    background-color: #111;;
  }
`;

export default Navbar;