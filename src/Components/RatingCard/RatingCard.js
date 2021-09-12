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

import { useState, useEffect } from "react"
import Rating from "@material-ui/lab/Rating"

import { addGeners } from "../../Redux/action"
import { useDispatch } from "react-redux"

const RatingCard = ({ imdbID, rating, genre }) => {
  const [data, setData] = useState("")
  const dispatch = useDispatch()
  const API_KEY = "aab2bb61"
  const urlOfRequest = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`

  useEffect(() => {
    fetch(urlOfRequest)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
        const arr = data.Genre.split(", ")
        dispatch(addGeners(arr))
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <RatingCardContainer>
      <ImgContainer>
        <Poster src={data.Poster} />
      </ImgContainer>
      <Detail>
        <InfoDiv>
          <InfoTitle>Title: </InfoTitle>
          <InfoValue>{data.Title}</InfoValue>
        </InfoDiv>
        <InfoDiv>
          <InfoTitle>Year: </InfoTitle>
          <InfoValue>{data.Year}</InfoValue>
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
