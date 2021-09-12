import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: 0 5px 5px ${({ theme }) => theme.dark};
  text-transform: uppercase;

  @media ${device.tablet} {
    height: 75px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.contrastOrange};

  @media ${device.tablet} {
    font-size: 36px;
    font-weight: 600;
  }
`

export const Motto = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.contrastOrange};
`

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.light};
  width: 70px;
  margin: 0 20px;
  padding: 5px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.contrastOrange};
  box-shadow: 4px -4px 6px 0 rgba(255, 255, 255, 0.3),
    4px 4px 6px 0 rgba(116, 125, 136, 0.2),
    inset 4px 4px 6px 0 rgba(255, 255, 255, 0.2),
    inset -4px -4px 6px 0 rgba(0, 0, 0, 0.2);
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

export const Icon = styled(SearchIcon)`
  color: ${(props) =>
    props.condition === 1
      ? ({ theme }) => theme.contrastOrange
      : ({ theme }) => theme.light};
  font-size: large;
  transition: 0.1s ease-in-out;

  @media ${device.tablet} {
    transition: 0.2s ease-in-out;
  }
`
