import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage/MainPage";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
