import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsBtnBox = styled.button`
  padding: 0.5rem;
  background: #ffffff1b;
  border-radius: 50px;
  border: 1px solid #cccccc2a;
  outline: none;
  backdrop-filter: blur(0.4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .1s ease-in-out;

  &:active {
    transform: scale(1.1);
  }
`;

export const HeaderTaxiLogo = styled.img`
  width: 2.5rem;
  height: 1.2rem;
  border-radius: 1.5px;
`;

export const UserFullName = styled.p`
  font-size: 1.3rem;
  font-family: inherit;
  color: #fff;
  margin-left: 0.5rem;
`;
