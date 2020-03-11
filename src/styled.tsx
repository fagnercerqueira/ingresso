import { createGlobalStyle } from 'styled-components'
import Theme from "./utils/Theme";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${Theme.White};
    background: ${Theme.BackgroundColor};
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }
`