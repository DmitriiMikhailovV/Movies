import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  body {
    max-width: 1920px;
  }
`

export default GlobalStyles
