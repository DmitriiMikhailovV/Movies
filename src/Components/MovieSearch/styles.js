import styled from "styled-components/macro"
import SearchIcon from "@material-ui/icons/Search"
import { device } from "../../MobileViewBreackpoints"

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 220px;
  margin: 15px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.contrastOrange};
  box-shadow: 0px 1px 10px 1px ${({ theme }) => theme.dark};

  @media ${device.tablet} {
    width: 375px;
    height: 165px;
  }

  @media ${device.mobileL} {
    width: 100%;
    height: ${(props) => (props.pages ? "calc(100vh - 75px)" : "165px")};
    border-radius: 0px;
    margin: ${(props) => (props.pages ? "0" : "0 0 15px 0")};
  }
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

  @media (hover: hover) {
    &:hover {
      width: 400px;
      background: ${({ theme }) => theme.light};
    }
  }

  @media ${device.tablet} {
    background: ${({ theme }) => theme.light};
    height: 22px;
    width: 300px;
    border-radius: 22px;
    padding: 7px 15px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  @media ${device.mobileS} {
    width: 200px;
    padding: 7px 25px;
  }
`

export const Icon = styled(SearchIcon)`
  color: ${(props) =>
    props.condition === 1
      ? ({ theme }) => theme.contrastOrange
      : ({ theme }) => theme.light};
  font-size: large;
  transition: 0.1s ease-in-out;

  @media (hover: hover) {
    ${InputContainer}:hover & {
      color: ${({ theme }) => theme.contrastOrange};
    }
  }

  @media ${device.tablet} {
    transition: 0.2s ease-in-out;
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

  @media ${device.tablet} {
    font-weight: 600;
    width: 400px;
    font-size: 18px;
    height: 75px;
    transition: 0.2s ease-in-out;

    ${InputContainer}:hover & {
      width: 300px;
    }
  }
`

export const Submit = styled.button`
  font-size: 26px;
  width: 125px;
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

  @media (hover: hover) {
    &:hover {
      transition: background-color 0.3s ease-in-out;
      background-color: ${({ theme }) => theme.contrastGreen};
    }
  }

  &:active {
    transition: box-shadow 0.1s ease-in-out;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  @media ${device.tablet} {
    font-size: 18px;
    width: 95px;
    padding: 7px 0;
    margin: 8px 0;
    font-weight: 500;
    transition: background-color 0.2s ease-in-out;
    transition: box-shadow 0.1s ease-in-out;
  }
`

export const YearContainer = styled(InputContainer)`
  width: 80px;
  padding: 10px 20px;

  @media (hover: hover) {
    &:hover {
      width: 80px;
      background: ${({ theme }) => theme.light};
    }
  }

  @media ${device.tablet} {
    width: 60px;
    padding: 7px 15px;

    &:hover {
      width: 60px;
    }
  }
`

export const InputYear = styled(Input)`
  width: 80px;

  @media (hover: hover) {
    ${YearContainer}:hover & {
      width: 80px;
    }
  }

  @media ${device.tablet} {
    width: 60px;

    ${YearContainer}:hover & {
      width: 60px;
    }
  }
`

export const NotFound = styled.div`
  display: ${(props) => (props.isResponse ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  font-size: 48px;
  color: ${({ theme }) => theme.dark};

  @media ${device.mobileL} {
    font-size: 32px;
  }

  @media ${device.mobileM} {
    font-size: 28px;
  }

  @media ${device.mobileM} {
    font-size: 24px;
  }
`
