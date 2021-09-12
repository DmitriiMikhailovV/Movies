import {
  StyledContainer,
  StyledSortConditions,
  StyledSelect,
  StyledOption,
  StyledItem,
} from "./styles"

const Filter = ({ onChange, arrayForSorting, value }) => {
  const array = arrayForSorting.map((item, index) => (
    <StyledOption key={index} value={item}>
      {item}
    </StyledOption>
  ))

  return (
    <StyledContainer>
      <StyledSortConditions>
        <StyledItem>Filter by</StyledItem>
        <StyledSelect onChange={onChange} value={value}>
          {array}
        </StyledSelect>
      </StyledSortConditions>
    </StyledContainer>
  )
}

export default Filter
