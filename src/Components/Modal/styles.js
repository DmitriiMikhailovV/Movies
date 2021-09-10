import styled from "styled-components/macro"

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
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.light};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 800px;
  height: 500px;
`

export const CloseButton = styled.button`
  padding: 5px 11px;
  position: relative;
  top: 10px;
  left: 370px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  font-size: 20px;
  transition: all 0.3s ease-out;
`
