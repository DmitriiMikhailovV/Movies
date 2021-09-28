import { combineReducers } from "redux"

const initialState = {
  userInputMovie: "",
  moviesData: null,
  year: "",
  currentPage: 1,
  pages: null,
  ratings: [],
  generes: ["none"],
}

const store = (state = initialState, action) => {
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
    case "ADD_RATING_OF_MOVIE":
      return { ...state, ratings: [...state.ratings, action.rating] }
    case "UPDATE_RATING_OF_MOVIE":
      return {
        ...state,
        ratings: state.ratings.map((movie) =>
          movie.imdbID === action.rating.imdbID ? action.rating : movie
        ),
      }
    case "ADD_GENERS":
      return {
        ...state,
        generes: [...new Set([...state.generes, ...action.gener])],
      }

    default:
      return state
  }
}

const App = combineReducers({
  store,
})

export default App
