import { useParams } from "react-router-dom"
import {
  MovieContainer,
  Poster,
  Detail,
  Title,
  Description,
  About,
  Info,
  Actors,
  StyledP,
  SectionTitle,
  TextTitle,
  InfoDiv,
  InfoTitle,
  InfoValue,
  ImgContainer,
  StyledLink,
} from "./styles"
import { RatingContainer } from "../../Components/MovieCard/styles"
import HoverRating from "../../Components/HoverRating/HoverRating"
import { CircularProgress } from "@material-ui/core"

import useFetch from "./../../useFetch"

const Movie = () => {
  const { imdbID } = useParams()

  const { response: movie, error } = useFetch(
    `http://www.omdbapi.com/?i=${imdbID}`
  )

  if (error) return console.log(error)

  const actorsArray = movie.data ? movie.data.Actors.split(", ") : ""
  const actors = movie.data
    ? actorsArray.map((item) => <StyledP key={item}>{item}</StyledP>)
    : ""

  return movie.loading ? (
    <MovieContainer>
      <CircularProgress />
    </MovieContainer>
  ) : (
    <MovieContainer>
      <ImgContainer>
        <Poster src={movie.data ? movie.data.Poster : ""} />

        <StyledLink to={"/search"}>back to search</StyledLink>
        <RatingContainer>
          Rating:{" "}
          <HoverRating
            imdbID={imdbID}
            genre={movie.data ? movie.data.Genre : ""}
            size={window.innerWidth <= 768 ? "small" : "large"}
          />
        </RatingContainer>
      </ImgContainer>
      <Detail>
        <Title>
          <TextTitle>
            {movie.data ? movie.data.Title : ""} (
            {movie.data ? movie.data.Year : ""})
          </TextTitle>
        </Title>
        <Description>
          <SectionTitle>DESCRIPTION: </SectionTitle>
          {movie.data ? movie.data.Plot : ""}
        </Description>
        <About>
          <SectionTitle>INFO: </SectionTitle>
          <Info>
            <InfoDiv>
              <InfoTitle>Year:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Year : ""}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Country:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Country : ""}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Genre:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Genre : ""}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Director:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Director : ""}</InfoValue>
            </InfoDiv>
            response
            <InfoDiv>
              <InfoTitle>Writer:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Writer : ""}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Released:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Released : ""}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Runtime:</InfoTitle>
              <InfoValue>{movie.data ? movie.data.Runtime : ""}</InfoValue>
            </InfoDiv>
          </Info>
        </About>
      </Detail>
      <Actors>
        <SectionTitle>ACTORS: </SectionTitle>
        {actors}
      </Actors>
    </MovieContainer>
  )
}

export default Movie
