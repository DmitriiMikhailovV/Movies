import { useSelector } from "react-redux"
import { PageContainer, MoviesContainer } from "../Ratings/styles"

import RatingCard from "../../Components/RatingCard/RatingCard"

const Ratings = () => {
  const arrayMoviesData = useSelector((state) => state.store.ratings)

  const ratenedMoviesData = arrayMoviesData.map((item) => (
    <RatingCard key={item.imdbID} imdbID={item.imdbID} rating={item.rating} />
  ))

  return (
    <PageContainer>
      <MoviesContainer>{ratenedMoviesData}</MoviesContainer>
    </PageContainer>
  )
}

export default Ratings
