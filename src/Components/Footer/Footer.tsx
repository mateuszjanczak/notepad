import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
    render() {
        return (
            <Wrapper>
                <Text>Mateusz Janczak</Text>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  color: #eee;
  background: #24292e;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
`;

export default Footer;