import {
  SearchContainer,
  InputContainer,
  Input,
  Icon,
  Submit,
  InputYear,
  YearContainer,
  StyledForm,
  NotFound,
} from "./styles"

const MovieSearch = ({
  onChangeMovie,
  onClick,
  searchedMovie,
  onChangeYear,
  searchedYear,
  pages,
  isResponse,
}) => {
  return (
    <SearchContainer pages={pages}>
      <StyledForm>
        <InputContainer condition={searchedMovie.length !== 0 ? 1 : 0}>
          <Input
            condition={searchedMovie.length !== 0 ? 1 : 0}
            placeholder={"Search Movie..."}
            onChange={onChangeMovie}
            value={searchedMovie}
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
      <NotFound isResponse={isResponse === "false" && window.innerWidth < 768}>
        Sorry. Movie not found
      </NotFound>
    </SearchContainer>
  )
}

export default MovieSearch
