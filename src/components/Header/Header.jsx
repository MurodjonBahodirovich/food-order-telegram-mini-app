import { Outlet, useLocation } from "react-router-dom";
import { HeaderContainer, HeaderName, UserName } from "./Header.styles";
import { useEffect, useState } from "react";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Header = () => {
  const [data, setData] = useState([]);
  const [chatId, setChatId] = useState(null);
  const query = useQuery();

  console.log(chatId);

  useEffect(() => {
    const chatIdFromUrl = query.get("chatId");

    if (chatIdFromUrl) {
      setChatId(chatIdFromUrl);
    }
  }, [query]);

  useEffect(() => {
    fetch(`http://localhost:8000/usersData`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderName href="/">Buyurtma berish</HeaderName>
        <UserName href="#">{data.map((user) => user.first_name)}</UserName>
      </HeaderContainer>

      <Outlet />
    </>
  );
};

export default Header;
