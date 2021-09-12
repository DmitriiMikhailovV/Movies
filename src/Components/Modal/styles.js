import styled from "styled-components/macro"
import { device } from "../../MobileViewBreackpoints"

export const ModalWindowContainer = styled.div`
  z-index: 999;
  display: ${(props) => (props.isModalOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(2px);
`

export const ModalWindow = styled.div`
  display: flex;
  text-align: center;
  background-color: ${({ theme }) => theme.light};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 500px;

  @media ${device.tablet} {
    width: 100%;
    border-radius: 0px;
  }
`

export const CloseButton = styled.button`
  padding: 5px 11px;
  height: 35px;
  position: absolute;
  top: calc(50% - 240px);
  right: calc(50% - 440px);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.contrastOrange};
  font-size: 20px;
  transition: all 0.3s ease-out;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.contrastGreen};
    }
  }

  @media ${device.tablet} {
    right: calc(50% - 374px);
    color: ${({ theme }) => theme.light};
  }
`

export const Poster = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 10px 0 0 10px;

  @media ${device.tablet} {
    border-radius: 0px;
  }
`

export const Detail = styled.div`
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.div`
  min-height: 80px;
  margin: 5px 10px;
  color: ${({ theme }) => theme.dark};

  align-self: center;
`

export const TextTitle = styled.p`
  font-size: 32px;
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
  display: flex;
  width: calc(100% - 20px);
  height: 100%;
  margin: 5px 10px;
`

export const Info = styled.div`
  width: 100%;
  height: 100%;
  text-align: justify;
  display: flex;
  flex-direction: column;
`

export const Actors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin-left: 20px;
  min-width: 100px;
  height: 100%;
`

export const StyledP = styled.p`
  font-size: 16px;
  margin: 2px 0;
`
