import GlobalStyles from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { colors } from "./theme"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useParams } from "react-router"

import Header from "./Components/Header/Header"
import Search from "./Pages/Search/Search"
import Movie from "./Pages/Movie/Movie"

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Switch>
          <Route path="/movie/:imdbID" component={Movie} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
