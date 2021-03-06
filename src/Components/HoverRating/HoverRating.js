import Rating from "@material-ui/lab/Rating"
import { Container } from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { addRatingOfMovie, updateRatingOfMovie } from "../../Redux/action"

const HoverRating = ({ imdbID, size, genre }) => {
  const dispatch = useDispatch()
  const obj = useSelector((state) =>
    // eslint-disable-next-line array-callback-return
    state.store.ratings.find((movie) => movie.imdbID === imdbID)
  )
  // const rating = () => {
  //   if (obj === undefined) {
  //     return null
  //   } else {
  //     return obj.rating
  //   }
  // }

  const rating = () => (obj === undefined ? null : obj.rating)

  return (
    <Container>
      <Rating
        name="half-rating"
        size={size}
        value={rating()}
        precision={1}
        onChange={(event, newValue) => {
          obj === undefined
            ? dispatch(
                addRatingOfMovie({
                  imdbID: imdbID,
                  rating: newValue,
                  genre: genre,
                })
              )
            : dispatch(
                updateRatingOfMovie({
                  imdbID: imdbID,
                  rating: newValue,
                  genre: genre,
                })
              )
        }}
      />
    </Container>
  )
}

export default HoverRating
