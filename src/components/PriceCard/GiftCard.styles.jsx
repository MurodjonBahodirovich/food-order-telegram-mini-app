import styled from "styled-components";

export const GiftCardMainContainer = styled.div`
  width: 11rem;
  height: 12rem;
  background: linear-gradient(to bottom, #0b9f1c, #2c2f33);
  border-radius: 10px;
  padding: 0.2rem 0.1rem 0 0.1rem;
  transition: all 0.1s ease-in-out;

  &:active {
    transform: scale(0.97);
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
