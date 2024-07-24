import styled from "styled-components";

export const GiftCardMainContainer = styled.div`
  width: 11rem;
  height: 12rem;
  background: linear-gradient(to bottom, #0b9f1c, #2c2f33);
  border-radius: 10px;
  padding: 0.2rem 0.1rem 0 0.1rem;
  transition: all 0.1s ease-in-out;

  position: relative;

  &:active {
    transform: scale(0.97);
  }

  &::before {
    content: "🔒";
    width: 100%;
    height: 100%;
    background: #0000005b;
    backdrop-filter: blur(1.1px);
    text-align: center;
    border-radius: 10px;
    font-size: 4rem;
    display: ${({ isblock }) => (isblock ? "block" : "none")};
    text-shadow: 0 0 10px rgb(255, 0, 0);

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const GiftCardSubContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c2f33;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const GiftImageBox = styled.img`
  width: 75%;
  height: 50%;
`;

export const GiftName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const GiftPrice = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-left: 0.5rem;
`;
