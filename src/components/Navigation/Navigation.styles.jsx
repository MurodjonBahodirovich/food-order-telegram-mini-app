import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 93%;
  height: 8rem;
  padding: 0.5rem;
  background: #0000001a;
  border: 1px solid #333333;
  backdrop-filter: blur(1rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  left: 50%;
  bottom: 1.5rem;

  transform: translate(-50%);

  z-index: 9999;
`;

export const FooterButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  background: #3939395f;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;

export const FooterButtonIcon = styled.div`
  width: 100%;
  height: 50%;
  font-size: 3rem;
  color: #d28d39;
`;

export const FooterButtonName = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`;
