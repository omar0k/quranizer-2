import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ChapterPage from "./Pages/ChapterPage";
import Player from "./Components/Player";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:chapterId" element={<ChapterPage />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;
