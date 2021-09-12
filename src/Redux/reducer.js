import { combineReducers } from "redux"

const initialState = {
  userInputMovie: "",
  moviesData: null,
  year: "",
  currentPage: 1,
  pages: null,
}

const search = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INPUT_MOVIE":
      return { ...state, userInputMovie: action.userInputMovie }
    case "MOVIES_DATA":
      return { ...state, moviesData: action.moviesData }
    case "YEAR":
      return { ...state, year: action.year }
    case "CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage }
    case "PAGES":
      return { ...state, pages: action.pages }

    default:
      return state
  }
}

const App = combineReducers({
  search,
})

export default App
