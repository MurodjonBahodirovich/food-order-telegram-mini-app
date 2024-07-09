import styled from "styled-components";

export const CategoryCardContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryCard = styled.div`
  width: 17rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  border-radius: 10px;
  border: 1px solid #333333;
  box-shadow: 0 0 10px 1px #3b3b3b94;
  backdrop-filter: blur(1rem);
  overflow: hidden;
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 55%;
  object-fit: contain;
`;

export const CategoryName = styled.p`
  font-size: 2rem;
  font-family: inherit;
  color: #fff;
`;

export const CategoryCardBtn = styled.button`
  width: 100%;
  cursor: pointer;
  padding: 1rem 2rem;
  text-align: center;
  outline: none;
  background: green;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  margin-bottom: 1rem;
`;
