import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: ${(props) => (props.pages ? "0" : "15px")};
`

export const NotFound = styled.div`
  display: flex;
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
