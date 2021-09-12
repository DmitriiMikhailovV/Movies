import { combineReducers } from "redux"

const initialState = {
  // userInputMovie: "joy",
  userInputMovie: "joy",
  moviesData: null,
  year: "",
  currentPage: 1,
  pages: null,
  // ratings: [],
  ratings: [
    { imdbID: "tt2446980", rating: 5 },
    { imdbID: "tt0206314", rating: 4 },
    { imdbID: "tt0107282", rating: 3 },
    { imdbID: "tt1140941", rating: 2 },
    { imdbID: "tt0468526", rating: 1 },
  ],
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

    default:
      return state
  }
}

// const rating = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const App = combineReducers({
  store,
})

export default App
