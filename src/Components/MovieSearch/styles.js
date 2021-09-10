import styled from "styled-components/macro"
import SearchIcon from "@material-ui/icons/Search"

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 220px;
  margin: 30px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.contrastOrange};
  box-shadow: 0px 1px 10px 1px ${({ theme }) => theme.dark};
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputContainer = styled.div`
  background: ${(props) =>
    props.condition === 1 ? ({ theme }) => theme.light : "transparent"};
  border: none;
  outline: none;
  width: ${(props) => (props.condition === 1 ? "400px" : "0px")};
  height: 30px;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.8s ease-in-out;

  &:hover {
    width: 400px;
    background: ${({ theme }) => theme.light};
  }
`

export const Icon = styled(SearchIcon)`
  color: ${(props) =>
    props.condition === 1
      ? ({ theme }) => theme.contrastOrange
      : ({ theme }) => theme.light};
  font-size: large;
  transition: 0.3s ease-in-out;

  ${InputContainer}:hover & {
    color: ${({ theme }) => theme.contrastOrange};
  }
`

export const Input = styled.input`
  font-weight: 700;
  font-size: 26px;
  background: transparent;
  border: none;
  outline: none;
  width: ${(props) => (props.condition === 1 ? "400px" : "0px")};
  height: 100px;
  transition: all 0.8s ease-in-out;

  ${InputContainer}:hover & {
    width: 400px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.dark};
    opacity: 0.6;
  }
`

export const Submit = styled.button`
  font-size: 26px;
  width: 125px;
  /* height: px; */
  padding: 9px 0;
  margin: 10px 0;
  border-radius: 30px;
  outline: none;
  border: none;
  font-weight: 600;
  background-color: ${({ theme }) => theme.contrastOrange};
  box-shadow: 4px -4px 6px 0 rgba(255, 255, 255, 0.3),
    4px 4px 6px 0 rgba(116, 125, 136, 0.2),
    inset 4px 4px 6px 0 rgba(255, 255, 255, 0.2),
    inset -4px -4px 6px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.contrastGreen};
  }

  &:active {
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
`

export const YearContainer = styled(InputContainer)`
  width: 80px;

  padding: 10px 20px;
  &:hover {
    width: 80px;
    background: ${({ theme }) => theme.light};
  }
`

export const InputYear = styled(Input)`
  width: 80px;
  ${YearContainer}:hover & {
    width: 80px;
  }
`
