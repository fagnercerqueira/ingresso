import { createGlobalStyle } from 'styled-components'
import Theme from "./utils/Theme";

export const GlobalStyle = createGlobalStyle`

  body {
    color: ${Theme.White};
    background: ${Theme.BackgroundColor};
    font-family: 'Arimo', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;

    &.movie-item{
      .App-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }

      &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 200px;
        background: ${Theme.BackgroundColor};
        background: linear-gradient(180deg, rgba(21, 22, 27, 1) 0%, rgba(21, 22, 27, 1) 50%, rgba(21, 22, 27, 0) 100%); 
      }
    }
  }


`