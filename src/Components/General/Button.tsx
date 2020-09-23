import styled from "styled-components";

const Button = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  border: 1px solid #24292e;
  color: #24292e;
  background: none;
  margin: 1rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  
  &:hover {
    color: black;
    background: #eed7c5;
    transition: all 0.25s linear;
  }
`;

export default Button;