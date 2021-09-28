import MovieSearch from "../../Components/MovieSearch/MovieSearch"
import MovieCard from "../../Components/MovieCard/MovieCard"

import Pagination from "@material-ui/lab/Pagination"
import { CircularProgress } from "@material-ui/core"

import { useHistory } from "react-router-dom"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setUserInputMovie,
  setMoviesData,
  setYear,
  setCurrentPage,
  setPages,
} from "../../Redux/action"

import { API_KEY } from "../../config"

import { PageContainer, MoviesContainer, NotFound } from "../Search/styles"

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [isResponse, setIsResponse] = useState("")
  const dispatch = useDispatch()
  const userInputMovie = useSelector((state) => state.store.userInputMovie)
  const [userInput, setUserInput] = useState(
    userInputMovie ? userInputMovie : ""
  )
  const [error, setError] = useState("")
  const moviesData = useSelector((state) => state.store.moviesData)
  const year = useSelector((state) => state.store.year)
  const currentPage = useSelector((state) => state.store.currentPage)
  const pages = useSelector((state) => state.store.pages)

  const history = useHistory()

  const fetchData = () => {
    if (userInput.length !== 0) {
      setLoading(true)
      dispatch(setMoviesData(null))
      fetch(
        `http://www.omdbapi.com/?s=${userInput}&apikey=${API_KEY}&page=${currentPage}&y=${year}&type=movie`
      )
        .then((res) => res.json())
        .then((result) => {
          const amauntResultMovies = result.totalResults
          const amountPages = Math.ceil(Number(amauntResultMovies) / 10)
          dispatch(setPages(amountPages))
          setIsResponse(result.Response)
          result.Response === "True"
            ? dispatch(setMoviesData(result.Search))
            : setError(result.Error)
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handleChange = (e, value) => {
    dispatch(setCurrentPage(value))
  }

  useEffect(() => {
    dispatch(setPages(null))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput])

  const ConditionOfSearch = () => {
    if (isResponse === "True") {
      return (
        moviesData !== null &&
        moviesData.length > 0 &&
        moviesData.map((item) => (
          <MovieCard
            onClick={() => history.push(`/movie/${item.imdbID}`)}
            key={item.imdbID}
            title={item.Title}
            src={item.Poster}
            year={item.Year}
            imdbID={item.imdbID}
          />
        ))
      )
    }
    if (isResponse === "False") {
      console.log(error)
      return <NotFound>Sorry. Movie not found</NotFound>
    }
  }

  return (
    <PageContainer>
      <MovieSearch
        pages={pages === null || isNaN(pages)}
        isResponse={isResponse}
        onClick={(e) => {
          e.preventDefault()
          dispatch(setCurrentPage(1))
          dispatch(setUserInputMovie(userInput))
          fetchData()
        }}
        onChangeMovie={(e) => setUserInput(e.target.value)}
        searchedMovie={userInput}
        onChangeYear={(e) => dispatch(setYear(e.target.value))}
        searchedYear={year}
        value={userInput}
        loading={loading}
      />
      {pages === null || isNaN(pages) ? (
        <></>
      ) : (
        <Pagination
          count={pages}
          page={currentPage}
          size={window.innerWidth <= 768 ? "medium" : "large"}
          onChange={handleChange}
        />
      )}
      <MoviesContainer pages={pages === null || isNaN(pages)}>
        {loading && window.innerWidth > 768 ? (
          <CircularProgress />
        ) : (
          ConditionOfSearch()
        )}
      </MoviesContainer>
    </PageContainer>
  )
}

export default Search
