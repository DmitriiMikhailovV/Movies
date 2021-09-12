import {
  ModalWindowContainer,
  ModalWindow,
  CloseButton,
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
} from "./styles"

const Modal = ({ isModalOpen, onClick, details }) => {
  const actorsArray = details ? details.Actors.split(", ") : ""
  const actors = details
    ? actorsArray.map((item) => <StyledP key={item}>{item}</StyledP>)
    : ""

  return (
    <ModalWindowContainer isModalOpen={isModalOpen}>
      <ModalWindow>
        <CloseButton onClick={onClick}>X</CloseButton>
        <Poster src={details.Poster} />
        <Detail>
          <Title>
            <TextTitle>
              {details.Title} ({details.Year})
            </TextTitle>
          </Title>
          <Description>
            <SectionTitle>DESCRIPTION: </SectionTitle>
            {details.Plot}
          </Description>
          <About>
            <Info>
              <SectionTitle>INFO: </SectionTitle>
              <StyledP>Year: {details.Year}</StyledP>
              <StyledP>Country: {details.Country}</StyledP>
              <StyledP>Genre: {details.Genre}</StyledP>
              <StyledP>Director: {details.Director}</StyledP>
              <StyledP>Writer: {details.Writer}</StyledP>
              <StyledP>Released: {details.Released}</StyledP>
              <StyledP>Runtime: {details.Runtime}</StyledP>
            </Info>
            <Actors>
              <SectionTitle>ACTORS: </SectionTitle>
              {actors}
            </Actors>
          </About>
        </Detail>
      </ModalWindow>
    </ModalWindowContainer>
  )
}

export default Modal
