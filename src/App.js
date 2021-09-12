import GlobalStyles from "./GlobalStyles"
import { ThemeProvider } from "styled-components"
import { colors } from "./theme"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import Header from "./Components/Header/Header"
import Search from "./Pages/Search/Search"
import Movie from "./Pages/Movie/Movie"
import Ratings from "./Pages/Ratings/Ratings"

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <BrowserRouter>
        <Route path="/">
          <Redirect to="/search" />
          <Header />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Switch>
          <Route path="/movie/:imdbID" component={Movie} />
        </Switch>
        <Route path="/ratings">
          <Ratings />
        </Route>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
