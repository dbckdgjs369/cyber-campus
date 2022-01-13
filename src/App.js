import "./App.css";

import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/Todopage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
