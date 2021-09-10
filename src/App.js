import GlobalStyles from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { colors } from "./theme"

import Header from "./Components/Header/Header"
import Search from "./Pages/Search/Search"

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Header />
      <Search />
    </ThemeProvider>
  )
}

export default App
