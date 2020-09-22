import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {routes} from "../../Routes/Routes";

class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <List>
                    <Item>
                        <Link as={NavLink} to={routes.notes}>List</Link>
                    </Item>
                    <Item>
                        <Link as={NavLink} to={routes.notes}>New Note</Link>
                    </Item>
                </List>
                <List>
                    <Item>
                        <Link as={NavLink} to={routes.login}>Sign In</Link>
                    </Item>
                    {false && <Item>
                        <Link as={NavLink} to={routes.logout}>Logout</Link>
                    </Item>}
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