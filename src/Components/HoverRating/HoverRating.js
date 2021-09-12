import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"
import { useState } from "react"
import { Container } from "./styles"

const HoverRating = ({ size }) => {
  const [value, setValue] = useState(0)

  return (
    <Container>
      <Rating
        name="half-rating"
        size={size}
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      />
    </Container>
  )
}

export default HoverRating
