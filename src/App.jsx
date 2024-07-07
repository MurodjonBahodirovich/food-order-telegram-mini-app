import { Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage/MainPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
}

export default App;
