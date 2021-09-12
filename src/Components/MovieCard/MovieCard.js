import {
  StyledLink,
  MovieCardContainer,
  MoviePoster,
  Text,
  MovieInfo,
  RatingContainer,
} from "./styles"
import { useHistory } from "react-router-dom"

import HoverRating from "../HoverRating/HoverRating"

const MovieCard = ({ title, src, year, imdbID }) => {
  const history = useHistory()
  return (
    <MovieCardContainer>
      <MoviePoster
        src={src}
        alt={title}
        onClick={() => history.push(`/movie/${imdbID}`)}
      />
      <MovieInfo>
        <Text>{title}</Text>
        <Text size={"24px"}>{year}</Text>
        <RatingContainer>
          Rating:{" "}
          <HoverRating size={window.innerWidth <= 768 ? "small" : "large"} />
        </RatingContainer>
      </MovieInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
