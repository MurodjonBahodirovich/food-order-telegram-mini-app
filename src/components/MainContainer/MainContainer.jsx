import React, { useState } from "react";
import {
  CircleBtnMainBox,
  CircleBtnSubBox,
  GiftCardsBox,
  MainBonusAndGoldMouseContainer,
  MainBonusNums,
  MainPageContainer,
  PointsToAdd,
  WinMouseImg,
} from "./MainContainer.styles";
import winMouseImage from "../../assets/images/win-mouse.png";
import winGoldCoin from "../../assets/images/gold-coins.png";
import GiftCard from "../PriceCard/GiftCard";

const MainContainer = () => {
  const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState([]);
  const pointsToAdd = 3;

  const giftCards = [
    {
      id: 1,
      cardImage:
        "https://www.pngall.com/wp-content/uploads/4/Gold-Coin-PNG-HD-Image.png",
      cardName: "10.000 so'm",
      cardPrice: 12000000,
    },
    {
      id: 2,
      cardImage:
        "https://png.pngtree.com/png-vector/20240718/ourmid/pngtree-money-bag-with-gold-coins-spilling-out-png-image_13127598.png",
      cardName: "25.000 so'm",
      cardPrice: 30000000,
    },
    {
      id: 3,
      cardImage:
        "https://png.pngtree.com/png-vector/20240629/ourmid/pngtree-sack-of-gold-coins-and-cash-notes-png-image_12920392.png",
      cardName: "50.000 so'm",
      cardPrice: 63000000,
    },
  ];

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <>
      <MainPageContainer>
        <GiftCardsBox>
          {giftCards.map((card) => (
            <GiftCard cardData={card} key={card.id} />
          ))}
        </GiftCardsBox>

        <MainBonusAndGoldMouseContainer>
          <MainBonusNums>
            <img src={winGoldCoin} alt="Win" style={{ width: "3.5rem" }} />
            <p style={{ marginLeft: "1.5rem" }}>{points.toLocaleString()}</p>
          </MainBonusNums>

          <CircleBtnMainBox onClick={handleCardClick}>
            <CircleBtnSubBox>
              <WinMouseImg src={winMouseImage} alt="Hamster Mouse" />
            </CircleBtnSubBox>
          </CircleBtnMainBox>

          {clicks.map((click) => (
            <PointsToAdd
              key={click.id}
              style={{
                top: `${click.y - 120}px`,
                left: `${click.x - 25}px`,
                animation: `float .7s ease-in-out`,
              }}
              onAnimationEnd={() => handleAnimationEnd(click.id)}
            >
              + {pointsToAdd}
            </PointsToAdd>
          ))}
        </MainBonusAndGoldMouseContainer>
      </MainPageContainer>
    </>
  );
};

export default MainContainer;
