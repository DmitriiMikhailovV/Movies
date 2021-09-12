import MovieSearch from "../../Components/MovieSearch/MovieSearch"
import MovieCard from "../../Components/MovieCard/MovieCard"

import Pagination from "@material-ui/lab/Pagination"
import { CircularProgress } from "@material-ui/core"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setUserInputMovie,
  setMoviesData,
  setYear,
  setCurrentPage,
  setPages,
} from "../../Redux/action"

import { PageContainer, MoviesContainer, NotFound } from "../Search/styles"

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [isResponse, setIsResponse] = useState("")
  const dispatch = useDispatch()
  const userInputMovie = useSelector((state) => state.store.userInputMovie)
  const moviesData = useSelector((state) => state.store.moviesData)
  const year = useSelector((state) => state.store.year)
  const currentPage = useSelector((state) => state.store.currentPage)
  const pages = useSelector((state) => state.store.pages)

  const API_KEY = "aab2bb61"
  const urlOfRequest = `http://www.omdbapi.com/?s=${userInputMovie}&apikey=${API_KEY}&page=${currentPage}&y=${year}&type=movie`

  const getMovie = (e) => {
    setLoading(true)
    dispatch(setMoviesData(null))
    if (e) {
      e.preventDefault()
    }
    getPage()
    fetch(urlOfRequest)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if (data.Response === "False") {
          console.log(data.Error)
          setIsResponse("false")
          setLoading(false)
        } else {
          dispatch(setMoviesData(data.Search))
          setLoading(false)
          setIsResponse("true")
        }
      })
      .catch(({ message }) => {
        console.log(message)
      })
  }

  const getPage = () => {
    fetch(urlOfRequest)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        const amauntResultMovies = data.totalResults
        const amountPages = Math.ceil(Number(amauntResultMovies) / 10)
        dispatch(setPages(amountPages))
      })
  }

  const handleChange = (e, value) => {
    dispatch(setCurrentPage(value))
  }

  useEffect(() => {
    if (userInputMovie.length !== 0) {
      getMovie()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    dispatch(setPages(null))
    dispatch(setCurrentPage(1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInputMovie.length])

  const ConditionOfSearch = () => {
    if (isResponse === "true") {
      return (
        moviesData !== null &&
        moviesData.length > 0 &&
        moviesData.map((item) => (
          <MovieCard
            key={item.imdbID}
            title={item.Title}
            src={item.Poster}
            year={item.Year}
            imdbID={item.imdbID}
          />
        ))
      )
    }
    if (isResponse === "false") {
      return <NotFound>Sorry. Movie not found</NotFound>
    }
  }

  return (
    <PageContainer>
      <MovieSearch
        pages={pages === null || isNaN(pages)}
        isResponse={isResponse}
        onClick={(e) => getMovie(e)}
        onChangeMovie={(e) => dispatch(setUserInputMovie(e.target.value))}
        searchedMovie={userInputMovie}
        onChangeYear={(e) => dispatch(setYear(e.target.value))}
        searchedYear={year}
        value={userInputMovie}
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
        {loading === true ? <CircularProgress /> : ConditionOfSearch()}
      </MoviesContainer>
    </PageContainer>
  )
}

export default Search
