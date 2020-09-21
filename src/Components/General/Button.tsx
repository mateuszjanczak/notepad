import styled from "styled-components";

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  font-size: 14px;
  letter-spacing: 0;
  border: 1px solid #24292e;
  color: #24292e;
  background: none;
  margin: 1rem;
  padding: 0.5rem 1.5rem;

  &:hover {
    color: black;
    background: #f0b81f;
    transition: all 0.25s linear;
  }
`;

export default Button;