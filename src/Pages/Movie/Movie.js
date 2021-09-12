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
  // Button,
  StyledLink,
} from "./styles"
import { RatingContainer } from "../../Components/MovieCard/styles"
import HoverRating from "../../Components/HoverRating/HoverRating"
import { useState, useEffect } from "react"
// import { useHistory } from "react-router-dom"

const Movie = () => {
  const { imdbID } = useParams()
  const [data, setData] = useState("")
  // const history = useHistory()

  const API_KEY = "aab2bb61"
  const urlOfRequest = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`

  useEffect(() => {
    fetch(urlOfRequest)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const actorsArray = data ? data.Actors.split(", ") : ""
  const actors = data
    ? actorsArray.map((item) => <StyledP key={item}>{item}</StyledP>)
    : ""

  return (
    <MovieContainer>
      <ImgContainer>
        <Poster src={data.Poster} />

        <StyledLink to={"/search"}>back to search</StyledLink>
        {/* <Button onClick={() => history.goBack()}>back to search</Button> */}
        <RatingContainer>
          Rating:{" "}
          <HoverRating size={window.innerWidth <= 768 ? "small" : "large"} />
        </RatingContainer>
      </ImgContainer>
      <Detail>
        <Title>
          <TextTitle>
            {data.Title} ({data.Year})
          </TextTitle>
        </Title>
        <Description>
          <SectionTitle>DESCRIPTION: </SectionTitle>
          {data.Plot}
        </Description>
        <About>
          <SectionTitle>INFO: </SectionTitle>
          <Info>
            <InfoDiv>
              <InfoTitle>Year:</InfoTitle>
              <InfoValue>{data.Year}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Country:</InfoTitle>
              <InfoValue>{data.Country}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Genre:</InfoTitle>
              <InfoValue>{data.Genre}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Director:</InfoTitle>
              <InfoValue>{data.Director}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Writer:</InfoTitle>
              <InfoValue>{data.Writer}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Released:</InfoTitle>
              <InfoValue>{data.Released}</InfoValue>
            </InfoDiv>
            <InfoDiv>
              <InfoTitle>Runtime:</InfoTitle>
              <InfoValue>{data.Runtime}</InfoValue>
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
