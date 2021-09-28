import {
  RatingCardContainer,
  ImgContainer,
  Poster,
  Detail,
  InfoDiv,
  InfoTitle,
  InfoValue,
  InfoRating,
} from "./styles"

import { useEffect } from "react"
import useFetch from "../../useFetch"
import Rating from "@material-ui/lab/Rating"
import { CircularProgress } from "@material-ui/core"

import { addGeners } from "../../Redux/action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const RatingCard = ({ imdbID, rating, genre }) => {
  const dispatch = useDispatch()
  const generes = useSelector((state) => state.store.generes)

  const { response: movie, error } = useFetch(
    `http://www.omdbapi.com/?i=${imdbID}`
  )

  useEffect(() => {
    let arr = null
    movie.data ? (arr = movie.data.Genre.split(", ")) : (arr = "")
    console.log(generes)
    dispatch(addGeners(arr))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie])

  if (error) return console.log(error)

  return movie.loading ? (
    <RatingCardContainer>
      <CircularProgress />
    </RatingCardContainer>
  ) : (
    <RatingCardContainer>
      <ImgContainer>
        <Poster src={movie.data ? movie.data.Poster : ""} />
      </ImgContainer>
      <Detail>
        <InfoDiv>
          <InfoTitle>Title: </InfoTitle>
          <InfoValue>{movie.data ? movie.data.Title : ""}</InfoValue>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>Year: </InfoTitle>
          <InfoValue>{movie.data ? movie.data.Year : ""}</InfoValue>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>Genre: </InfoTitle>
          <InfoValue>{genre}</InfoValue>
        </InfoDiv>
        <InfoRating>
          <InfoTitle rating={true}>My Rating: </InfoTitle>
          <InfoValue>
            {
              <Rating
                name="read-only"
                size={"medium"}
                value={rating}
                readOnly
              />
            }
          </InfoValue>
        </InfoRating>
      </Detail>
    </RatingCardContainer>
  )
}

export default RatingCard
