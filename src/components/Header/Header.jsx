import React from "react";
import { HeaderContainer, HeaderTaxiLogo, UserFullName } from "./Header.styles";
import taxiLogo from "../../assets/images/taxi-logo.png";

const Header = ({ userData }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderTaxiLogo src={taxiLogo} alt="taxi logo" />
        <UserFullName>{`${userData?.first_name} ${userData?.last_name}`}</UserFullName>
      </HeaderContainer>
    </>
  );
};

export default Header;
