export const setUserInputMovie = (userInputMovie) => {
  return { type: "SET_USER_INPUT_MOVIE", userInputMovie }
}
export const setMoviesData = (moviesData) => {
  return { type: "MOVIES_DATA", moviesData }
}

export const setYear = (year) => {
  return { type: "YEAR", year }
}
export const setCurrentPage = (currentPage) => {
  return { type: "CURRENT_PAGE", currentPage }
}

export const setPages = (pages) => {
  return { type: "PAGES", pages }
}
