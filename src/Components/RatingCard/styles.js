import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"

export const RatingCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  margin: 20px 0;

  @media ${device.mobileM} {
    height: 200px;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.tablet} {
    align-self: center;
  }
`
export const Poster = styled.img`
  margin: 0 20px;
  width: 180px;
  height: 300px;

  @media ${device.mobileM} {
    width: 120px;
    height: 200px;
  }
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }

  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 10px 0;
`

export const InfoRating = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 10px 0;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

export const InfoTitle = styled.div`
  width: 30%;
  font-size: 22px;
  margin-right: 20px;

  @media ${device.mobileL} {
    margin-right: 15px;
    font-size: 18px;
    width: ${(props) => (props.rating ? "100%" : "30%")};
  }
  @media ${device.mobileM} {
    margin-right: 10px;
    font-size: 16px;
  }
`

export const InfoValue = styled.div`
  font-size: 22px;
  width: 70%;

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.mobileM} {
    font-size: 16px;
  }
`
