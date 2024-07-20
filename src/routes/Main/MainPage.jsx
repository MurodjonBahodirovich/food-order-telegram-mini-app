import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";

const MainPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/usersData`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => data.map((userData) => setUserData(userData)));
  }, []);

  return (
    <>
      <Header userData={userData} />
      <MainContainer />
    </>
  );
};

export default MainPage;
