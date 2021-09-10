import styled from "styled-components/macro"

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
  /* background: url(${(props) => props.src}) no-repeat center center;
  background-size: cover; */

  &:hover {
    box-shadow: 0px 1px 10px 5px ${({ theme }) => theme.contrastGreen};
  }
`

export const MoviePoster = styled.img`
  position: absolute;
  width: 300px;
  height: 500px;
`

export const MovieInfo = styled.div`
  z-index: 2;
  background: ${({ theme }) => theme.dark};
  width: 100%;
  position: relative;
  transition: 0.3s ease-in-out;
  transform: translateY(100%);

  ${MovieCardContainer}:hover & {
    transform: translateY(0);
  }
`

export const Text = styled.h2`
  font-size: ${(props) => (props.size ? props.size : "32px")};
  text-align: center;
  margin: 5px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.light};
`
