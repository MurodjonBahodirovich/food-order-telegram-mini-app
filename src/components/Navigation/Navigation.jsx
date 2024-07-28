import React from "react";
import {
  FooterButton,
  FooterButtonIcon,
  FooterButtonName,
  FooterContainer,
} from "./Navigation.styles";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaCartPlus, FaShoppingBasket } from "react-icons/fa";
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
      btnName: "Buyurtma",
      btnLink: "/order-page",
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
          <Link
            key={btn.id}
            to={btn.btnLink}
            style={{ width: "23%", height: "90%" }}
          >
            <FooterButton>
              <FooterButtonIcon>{btn.btnIcon}</FooterButtonIcon>
              <FooterButtonName>{btn.btnName}</FooterButtonName>
            </FooterButton>
          </Link>
        ))}
      </FooterContainer>
    </>
  );
};

export default Navigation;
