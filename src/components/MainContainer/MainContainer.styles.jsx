import styled from "styled-components";

export const MainPageContainer = styled.div`
  width: 100%;
  height: 95%;
  background: #00071f;
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
