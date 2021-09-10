import styled from "styled-components/macro"

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: 0 5px 5px ${({ theme }) => theme.dark};
  text-transform: uppercase;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.contrastOrange};
`

export const Strip = styled.span`
      background-image: linear-gradient(
      transparent calc(65% - 5px),
      darken($color, 15%) 5px
    );
    background-size: 0;
    background-repeat: no-repeat;
    display: inline;
    transition: 0.5s ease;
  }
`

export const Motto = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.contrastOrange};
`
