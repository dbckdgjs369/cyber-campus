import "./App.css";

import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/Todopage";
import LectureRoomPage from "./pages/LectureRoomPage/LectureRoomPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/myLecture" element={<LectureRoomPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
