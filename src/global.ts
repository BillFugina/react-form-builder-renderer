import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    font-family: Helvetica, Arial, sans-serif;
    height: 100%;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  #retoggle-mount-root > div {
    z-index: 10000;
  }
`
