import {
  SearchContainer,
  InputContainer,
  Input,
  Icon,
  Submit,
  InputYear,
  YearContainer,
  StyledForm,
} from "./styles"

const MovieSearch = ({
  onChangeMovie,
  onClick,
  searchedMovie,
  onChangeYear,
  searchedYear,
}) => {
  return (
    <SearchContainer>
      <StyledForm>
        <InputContainer condition={searchedMovie.length !== 0 ? 1 : 0}>
          <Input
            condition={searchedMovie.length !== 0 ? 1 : 0}
            placeholder={"Search Movie..."}
            onChange={onChangeMovie}
          />
          <Icon condition={searchedMovie.length !== 0 ? 1 : 0} />
        </InputContainer>
        <YearContainer condition={searchedYear.length !== 0 ? 1 : 0}>
          <InputYear
            condition={searchedYear.length !== 0 ? 1 : 0}
            placeholder={"Year..."}
            onChange={onChangeYear}
          />
          <Icon condition={searchedYear.length !== 0 ? 1 : 0} />
        </YearContainer>
        <Submit type="submit" onClick={onClick}>
          Search
        </Submit>
      </StyledForm>
    </SearchContainer>
  )
}

export default MovieSearch
