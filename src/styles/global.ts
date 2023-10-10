import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${ props => props.theme.backGroundColor };
        color: ${ props => props.theme.fontColor };
    }
`
