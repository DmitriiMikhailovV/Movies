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
  margin: 15px;
  width: 90%;
`

export const NotFound = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  font-size: 48px;
  color: ${({ theme }) => theme.dark};
`
