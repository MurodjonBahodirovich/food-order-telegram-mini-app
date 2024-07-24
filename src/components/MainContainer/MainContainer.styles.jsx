import styled from "styled-components";

export const MainPageContainer = styled.div`
  width: 100%;
  height: 90%;
  background: #000517;
  overflow-y: scroll;
  border-radius: 35px 35px 0 0;
  box-shadow: 0 5px 50px #ffaa00;
  border-top: 2px solid #ffaa00;

  position: absolute;
  bottom: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GiftCardsBox = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MainBonusAndGoldMouseContainer = styled.div`
  width: 100%;
  height: 34rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MainBonusNums = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.3rem;
  font-weight: bold;
  font-family: inherit;
  color: #fff;
  letter-spacing: 2px;
`;

export const CircleBtnMainBox = styled.div`
  width: 27rem;
  height: 27rem;
  border-radius: 50%;
  background: linear-gradient(#ffff00, #2e230d);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleBtnSubBox = styled.div`
  width: 24.2rem;
  height: 24.2rem;
  border-radius: 50%;
  background: radial-gradient(#bebe15, #181502ba);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WinMouseImg = styled.img`
  width: 10rem;
`;

export const PointsToAdd = styled.p`
  position: absolute;
  font-size: 3.5rem;
  font-family: sans-serif;
  font-weight: bold;
  opacity: 0;
  color: #fff;
  pointer-events: none;

  @keyframes float {
    0% {
      opacity: 1;
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      transform: translateY(-150px);
    }
  }
`;