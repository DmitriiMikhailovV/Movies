import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"
import { Link } from "react-router-dom"

export const MovieCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  border-radius: 10px;
  border: none;
  margin: 20px 20px;
  box-shadow: 0px 1px 10px 1px ${({ theme }) => theme.dark};
  width: 300px;
  height: 500px;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 1px 10px 5px ${({ theme }) => theme.contrastGreen};
    }
  }
`

export const MoviePoster = styled.img`
  position: absolute;
  width: 300px;
  height: 500px;
  border-radius: 10px;
`

export const MovieInfo = styled.div`
  z-index: 2;
  background: ${({ theme }) => theme.contrastOrange};
  width: 100%;
  position: relative;
  transition: 0.3s ease-in-out;
  transform: translateY(100%);

  @media (hover: hover) {
    ${MovieCardContainer}:hover & {
      transform: translateY(0);
    }
  }

  @media ${device.tablet} {
    transform: translateY(0);
  }
`

export const Text = styled.h2`
  font-size: ${(props) => (props.size ? props.size : "32px")};
  text-align: center;
  margin: 5px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.dark};

  @media ${device.tablet} {
    font-size: ${(props) => (props.size ? "18px" : "24px")};
    font-weight: 400;
  }
`

export const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.dark};
  margin: 20px 0 5px 0;
  font-size: 22px;

  @media ${device.tablet} {
    margin: 10px 0 5px 0;
    font-size: 16px;
  }
`
