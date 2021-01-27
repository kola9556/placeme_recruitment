import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-family: 'Work Sans', sans-serif;
}

body{
margin: 0;
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
background-color: darkslateblue;

@media screen and (max-width: 400px) {
    height: auto;
  }
}
`;

export default GlobalStyle;
