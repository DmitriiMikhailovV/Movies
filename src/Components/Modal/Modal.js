import { ModalWindowContainer, ModalWindow, CloseButton } from "./styles"

const Modal = ({ isModalOpen, onClick, details }) => {
  return (
    <ModalWindowContainer isModalOpen={isModalOpen}>
      <ModalWindow>
        <CloseButton onClick={onClick}>X</CloseButton>
        {details.Poster}
        {details.Title}
        {details.Year}
        {details.Plot}
        {details.Year}
        {details.Country}
        {details.Genre}
        {details.Director}
        {details.Writer}
        {details.Released}
        {details.Rated}
        {details.Runtime}
      </ModalWindow>
    </ModalWindowContainer>
  )
}

export default Modal
