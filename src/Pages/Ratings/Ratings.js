import { useSelector } from "react-redux"
import { PageContainer, MoviesContainer } from "../Ratings/styles"

import RatingCard from "../../Components/RatingCard/RatingCard"
import Filter from "../../Components/Filter/Filter"
import { useState, useEffect } from "react"

const Ratings = () => {
  const arrayMoviesData = useSelector((state) => state.store.ratings)
  const generes = useSelector((state) => state.store.generes)
  const [genre, setGenre] = useState("")
  const [filteredMovies, setFilteredMovies] = useState([])

  const ratenedMoviesData = filteredMovies.map((item) => (
    <RatingCard
      key={item.imdbID}
      imdbID={item.imdbID}
      rating={item.rating}
      genre={item.genre}
    />
  ))

  const nonFiltredMoviesData = arrayMoviesData.map((item) => (
    <RatingCard
      key={item.imdbID}
      imdbID={item.imdbID}
      rating={item.rating}
      genre={item.genre}
    />
  ))

  useEffect(() => {
    setFilteredMovies(
      arrayMoviesData.filter((movie) => movie.genre.includes(genre))
    )
  }, [genre, arrayMoviesData])

  return (
    <PageContainer>
      <Filter
        arrayForSorting={generes}
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      />
      <MoviesContainer>
        {genre === "none" ? nonFiltredMoviesData : ratenedMoviesData}
      </MoviesContainer>
    </PageContainer>
  )
}

export default Ratings
