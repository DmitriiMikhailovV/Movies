import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 10%;
  padding-top: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  min-height: calc(100vh - 100px);

  @media ${device.tablet} {
    width: 100%;
    padding-top: 0px;
    border-radius: 0px;
    margin: 0;
    box-shadow: none;
    height: auto;
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`
