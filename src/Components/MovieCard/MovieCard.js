import { MovieCardContainer, MoviePoster, Text, MovieInfo } from "./styles"
import Modal from "../Modal/Modal"

import { useState, useEffect } from "react"

const MovieCard = ({ title, src, year, imdbID }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detail, setDetail] = useState("")

  const API_KEY = "aab2bb61"
  const urlOfRequest = `http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`

  const changeStateModal = (e) => {
    e.preventDefault()
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    fetch(urlOfRequest)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setDetail(data)
      })
  }, [])

  return (
    <MovieCardContainer onClick={(e) => changeStateModal(e)}>
      <Modal
        isModalOpen={isModalOpen}
        onClick={(e) => changeStateModal(e)}
        details={detail}
      />
      <MoviePoster src={src} alt={title} />
      <MovieInfo>
        <Text>{title}</Text>
        <Text size={"24px"}>{year}</Text>
      </MovieInfo>
    </MovieCardContainer>
  )
}

export default MovieCard
