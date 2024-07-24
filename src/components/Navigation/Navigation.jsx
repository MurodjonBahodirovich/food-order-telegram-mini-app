import React from "react";
import {
  FooterButton,
  FooterButtonIcon,
  FooterButtonName,
  FooterContainer,
} from "./Navigation.styles";
import { Outlet } from "react-router-dom";
import {
  FaHome,
  FaCartPlus,
  FaShoppingBasket,
} from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

const Navigation = () => {
  const navigationBtns = [
    {
      id: 1,
      btnIcon: <FaHome />,
      btnName: "Bosh sahifa",
      btnLink: "/",
    },
    {
      id: 2,
      btnIcon: <FaCartPlus />,
      btnName: "Buyurtma berish",
      btnLink: "/order",
    },
    {
      id: 3,
      btnIcon: <FaShoppingBasket />,
      btnName: "Savat",
      btnLink: "/cart",
    },
    {
      id: 4,
      btnIcon: <IoPersonCircleSharp />,
      btnName: "Profil",
      btnLink: "/profile",
    },
  ];

  return (
    <>
      <Outlet />
      <FooterContainer>
        {navigationBtns.map((btn) => (
          <FooterButton key={btn.id}>
            <FooterButtonIcon>{btn.btnIcon}</FooterButtonIcon>
            <FooterButtonName>{btn.btnName}</FooterButtonName>
          </FooterButton>
        ))}
      </FooterContainer>
    </>
  );
};

export default Navigation;
