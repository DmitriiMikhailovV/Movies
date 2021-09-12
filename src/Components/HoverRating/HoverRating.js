import Rating from "@material-ui/lab/Rating"
import { Container } from "./styles"
import { useSelector, useDispatch } from "react-redux"
import { addRatingOfMovie, updateRatingOfMovie } from "../../Redux/action"

const HoverRating = ({ imdbID, size }) => {
  const dispatch = useDispatch()
  const obj = useSelector((state) =>
    // eslint-disable-next-line array-callback-return
    state.store.ratings.find((movie) => {
      if (movie.imdbID === imdbID) return true
    })
  )
  const rating = () => {
    if (obj === undefined) {
      return null
    } else {
      return obj.rating
    }
  }

  return (
    <Container>
      <Rating
        name="half-rating"
        size={size}
        value={rating()}
        precision={1}
        onChange={(event, newValue) => {
          obj === undefined
            ? dispatch(addRatingOfMovie({ imdbID: imdbID, rating: newValue }))
            : dispatch(
                updateRatingOfMovie({ imdbID: imdbID, rating: newValue })
              )
        }}
      />
    </Container>
  )
}

export default HoverRating
