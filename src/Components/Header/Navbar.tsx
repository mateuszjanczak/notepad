import React from "react";
import styled from "styled-components";

class Navbar extends React.Component {
    render() {
        return (
            <Nav>
                <Links>
                    <Link>Notes</Link>
                </Links>
                <Links>
                    <Link>Login</Link>
                    <Link>Register</Link>
                    <Link>Logout</Link>
                </Links>
            </Nav>
        )
    }
}

const Nav = styled.nav`
  color: #eee;
  background: #24292e;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.li`
  margin-right: 1.5rem;
`;

export default Navbar;