import React, { useState } from "react";
import {
  GiftCardMainContainer,
  GiftCardSubContainer,
  GiftImageBox,
  GiftName,
  GiftPrice,
} from "./GiftCard.styles";
import winGoldCoin from "../../assets/images/gold-coins.png";

const GiftCard = ({ cardData }) => {
  const { cardImage, giftQuantity, cardPrice } = cardData;
  const [isBlock, setIsBlock] = useState(true);

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed() + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed() + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed() + "K";
    }
    return num;
  };

  return (
    <>
      <GiftCardMainContainer isblock={isBlock.toString()}>
        <GiftCardSubContainer>
          <GiftImageBox src={cardImage} alt={giftQuantity} />
          <GiftName>{giftQuantity.toLocaleString()} so'm</GiftName>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "1.2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={winGoldCoin} alt="Win" style={{ width: "1rem" }} />
            <GiftPrice>{formatNumber(cardPrice)}</GiftPrice>
          </div>
        </GiftCardSubContainer>
      </GiftCardMainContainer>
    </>
  );
};

export default GiftCard;
