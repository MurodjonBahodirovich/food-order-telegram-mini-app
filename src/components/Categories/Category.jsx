import React, { useEffect, useState } from "react";
import {
  CategoryCard,
  CategoryCardBtn,
  CategoryCardContainer,
  CategoryImage,
  CategoryName,
} from "./Category.styles";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/products`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CategoryCardContainer>
      {data.map((cgy) => (
        <CategoryCard key={cgy.category_name}>
          <CategoryImage src={cgy.category_image} alt={cgy.category_name} />
          <CategoryName>{cgy.category_name}</CategoryName>
          <Link style={{ width: "80%" }}>
            <CategoryCardBtn>Ko'rish</CategoryCardBtn>
          </Link>
        </CategoryCard>
      ))}
    </CategoryCardContainer>
  );
};

export default Category;
