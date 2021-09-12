import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"
import { Link } from "react-router-dom"

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 10%;
  padding-top: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: calc(100vh - 140px);

  @media ${device.laptop} {
    border-radius: 0px;
    height: calc(100vh - 100px);
  }

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
    margin: 0;
    flex-direction: column;
    box-shadow: none;
    height: auto;
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
  width: 300px;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

export const Detail = styled.div`
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.laptop} {
    width: 60%;
    height: auto;
  }

  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`

export const Title = styled.div`
  margin: 5px 10px;
  color: ${({ theme }) => theme.dark};
`

export const TextTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
`

export const SectionTitle = styled.p`
  font-size: 18px;
  margin: 5px 0;
`

export const Description = styled.div`
  margin: 5px 10px;
  color: ${({ theme }) => theme.dark};
  font-size: 16px;
  text-align: left;
  line-height: 22px;
`

export const About = styled.div`
  width: calc(100% - 20px);
  height: 100%;
  margin: 5px 10px;

  @media ${device.tablet} {
    height: auto;
  }
`

export const Info = styled.div`
  width: 100%;
  text-align: justify;

  @media ${device.tablet} {
    width: 100%;
  }
`

export const Actors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin-left: 20px;
  min-width: 200px;

  @media ${device.laptop} {
    width: 40%;
  }
`

export const StyledP = styled.p`
  font-size: 16px;
  min-height: 20px;
  margin: 5px 0;
`

export const TitleInfo = styled.div`
  width: 100px;
`

export const InfoDiv = styled.div`
  display: flex;
  margin: 15px 0;
`

export const InfoTitle = styled.div`
  width: 20%;
  margin-right: 20px;
`

export const InfoValue = styled.div`
  width: 80%;
`

export const StyledLink = styled(Link)`
  height: 30px;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  line-height: 30px;
  margin: 20px;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.contrastOrange};
  }
`
