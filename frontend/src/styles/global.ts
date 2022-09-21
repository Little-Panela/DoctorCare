import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

  :focus {
    outline: 0;
    //box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
   }

  body {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-500']};

    overflow: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
