import MovieSearch from "../../Components/MovieSearch/MovieSearch"
import MovieCard from "../../Components/MovieCard/MovieCard"

import Pagination from "@material-ui/lab/Pagination"
import { CircularProgress } from "@material-ui/core"

import { useState, useEffect } from "react"

import { PageContainer, MoviesContainer, NotFound } from "./styles"

const Search = () => {
  const initializeUserInput = () => {
    return JSON.parse(localStorage.getItem("userInput")) ?? ""
  }

  const initializeMovies = () => {
    return JSON.parse(localStorage.getItem("movies")) ?? null
  }

  const initializeCurrentPage = () => {
    return JSON.parse(localStorage.getItem("currentPage")) ?? 1
  }

  // const [movies, setMovies] = useState(null)
  const [movies, setMovies] = useState(initializeMovies())
  const [loading, setLoading] = useState(false)
  const [isResponse, setIsResponse] = useState("")
  const [currentPage, setCurrentPage] = useState(initializeCurrentPage())
  const [pages, setPages] = useState(null)
  const [userInput, setUserInput] = useState(initializeUserInput())
  // const [userInput, setUserInput] = useState("")
  const [year, setYear] = useState("")

  const API_KEY = "aab2bb61"
  const urlOfRequest = `http://www.omdbapi.com/?s=${userInput}&apikey=${API_KEY}&page=${currentPage}&y=${year}&type=movie`

  const getMovie = (e) => {
    setLoading(true)
    setMovies(null)
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
          setMovies(data.Search)
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
        setPages(amountPages)
      })
  }

  const handleChange = (e, value) => {
    setCurrentPage(value)
  }

  useEffect(() => {
    if (userInput.length !== 0) {
      getMovie()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies))
  }, [movies])

  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(userInput))
  }, [userInput])

  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(currentPage))
  }, [currentPage])

  useEffect(() => {
    setPages(null)
    setCurrentPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput.length || initializeUserInput().length === 0])

  const ConditionOfSearch = () => {
    if (isResponse === "true") {
      return (
        movies !== null &&
        movies.length > 0 &&
        movies.map((item, index) => (
          <MovieCard
            key={index}
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
        onClick={(e) => getMovie(e)}
        onChangeMovie={(e) => setUserInput(e.target.value)}
        searchedMovie={userInput}
        onChangeYear={(e) => setYear(e.target.value)}
        searchedYear={year}
        value={userInput}
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
      <MoviesContainer>
        {loading === true ? <CircularProgress /> : ConditionOfSearch()}
        {ConditionOfSearch()}
      </MoviesContainer>
    </PageContainer>
  )
}

export default Search
