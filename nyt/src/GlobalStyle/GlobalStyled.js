import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
html {
    font-size: 15px
}
body {
    font-family: 'arial';
    text-align: center;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color}
}
a {
    color: ${props => props.theme.link};
    font-weight: 900;
}
`;

export default GlobalStyled;
