import React from "react";
import {
  HeaderContainer,
  HeaderTaxiLogo,
  SettingsBtnBox,
  UserFullName,
} from "./Header.styles";
import taxiLogo from "../../assets/images/taxi-logo.png";
import { MdSettings } from "react-icons/md";

const Header = ({ userData }) => {
  return (
    <>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <HeaderTaxiLogo src={taxiLogo} alt="taxi logo" />
          <UserFullName>{`${userData?.first_name} ${userData?.last_name}`}</UserFullName>
        </div>

        <SettingsBtnBox>
          <MdSettings color="#fff" size={25} />
        </SettingsBtnBox>
      </HeaderContainer>
    </>
  );
};

export default Header;
