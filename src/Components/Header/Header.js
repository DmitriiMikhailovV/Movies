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
        <Icon fontSize={"large"} />
      </StyledLink>
      <TitleContainer>
        <Title>moovy</Title>
        <Motto>search your fav</Motto>
      </TitleContainer>
      <StyledLink to={"/rating"}>MY RATING</StyledLink>
    </HeaderContainer>
  )
}

export default Header
