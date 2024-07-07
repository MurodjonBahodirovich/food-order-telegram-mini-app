import React from "react";
import { HeaderContainer, HeaderName, UserName } from "./Header.styles";

const Header = () => {
  return <HeaderContainer>
    <HeaderName href="/">Buyurtma berish</HeaderName>
    <UserName href="#">Murodjon</UserName>
  </HeaderContainer>;
};

export default Header;
