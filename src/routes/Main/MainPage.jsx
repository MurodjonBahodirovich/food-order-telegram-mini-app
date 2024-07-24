import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/MainContainer/MainContainer";
import Navigation from "../../components/Navigation/Navigation";

const MainPage = () => {
  const [userData, setUserData] = useState({
    id: 1381672171,
    is_bot: false,
    first_name: "Murodjon",
    last_name: "Halilov",
    username: "MurodjonHalilov",
    language_code: "en",
  });

  useEffect(() => {
    fetch(`http://localhost:8000/usersData`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => data.map((userData) => setUserData(userData)));
  }, []);

  return (
    <>
      {userData ? (
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Header userData={userData} />
          <MainContainer />
          <Navigation />
        </div>
      ) : (
        <h1 color="#fff">Loading...</h1>
      )}
    </>
  );
};

export default MainPage;
