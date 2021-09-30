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
import { CircularProgress } from "@material-ui/core"

const MovieSearch = ({
  onChangeMovie,
  onClick,
  searchedMovie,
  onChangeYear,
  searchedYear,
  pages,
  isResponse,
  loading,
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
            value={searchedYear}
          />
          <Icon condition={searchedYear.length !== 0 ? 1 : 0} />
        </YearContainer>
        <Submit type="submit" onClick={onClick}>
          Search
        </Submit>
      </StyledForm>
      <NotFound isResponse={isResponse === "False" && window.innerWidth < 768}>
        Sorry. Movie not found
      </NotFound>
      {loading && window.innerWidth <= 768 ? <CircularProgress /> : ""}
    </SearchContainer>
  )
}

export default MovieSearch
