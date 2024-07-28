import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./routes/Main/MainPage";
import OrderPage from "./routes/Order/OrderPage";
import Navigation from "./components/Navigation/Navigation";
import CartPage from "./routes/Cart/CartPage";
import ProfilePage from "./routes/Profile/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order-page" element={<OrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
