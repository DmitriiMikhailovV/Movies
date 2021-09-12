import styled from "styled-components/macro"

export const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
`

export const StyledSortConditions = styled.div`
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: auto auto;
  height: 60px;
`

export const StyledSelect = styled.select`
  font-size: 16px;
  font-weight: 500;
  height: 25px;
  width: 250px;
  margin: 5px 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.dark};
  text-align: center;
  outline: none;
`

export const StyledOption = styled.option`
  font-size: "14px";
  word-wrap: break-word;
  font-weight: 500;
  color: ${({ theme }) => theme.dark};
  text-align: center;
`
export const StyledItem = styled.p`
  font-size: "14px";
  font-weight: 500;
  color: ${({ theme }) => theme.dark};
  text-align: center;
`
