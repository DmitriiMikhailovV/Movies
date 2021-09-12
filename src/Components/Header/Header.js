import {
  HeaderContainer,
  Title,
  Motto,
  TitleContainer,
  StyledLink,
  Icon,
} from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLink to={"/search"}>
        <Icon fontSize={window.innerWidth <= 768 ? "small" : "large"} />
      </StyledLink>
      <TitleContainer>
        <Title>moovy</Title>
        <Motto>search your movie</Motto>
      </TitleContainer>
      <StyledLink to={"/rating"}>MY RATING</StyledLink>
    </HeaderContainer>
  )
}

export default Header
