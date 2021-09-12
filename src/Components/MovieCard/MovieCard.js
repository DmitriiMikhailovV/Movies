import { MovieCardContainer, MoviePoster, Text, MovieInfo } from "./styles"

const MovieCard = ({ onClick, title, src, year }) => {
  return (
    <MovieCardContainer>
      <MoviePoster src={src} alt={title} onClick={onClick} />
      <MovieInfo>
        <Text>{title}</Text>
        <Text size={"24px"}>{year}</Text>
      </MovieInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
