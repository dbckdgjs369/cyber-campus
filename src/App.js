import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
