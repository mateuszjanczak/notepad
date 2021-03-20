import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Asap+Condensed&display=swap');
  
    *, *::before, *::after {
        box-sizing: border-box;
    }
  
    html {
        font-size: 62.5%;
        color: black;
        background: #eee;
    }
  
    body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: 'Asap Condensed', sans-serif;
    }
    
    *:focus {
    outline: none;
}
`;

export default GlobalStyle;