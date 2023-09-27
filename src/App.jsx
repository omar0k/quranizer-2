import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ChapterPage from "./Pages/ChapterPage";
import AudioPlayer from "./Components/AudioPlayer";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:chapterId" element={<ChapterPage />} />
      </Routes>
      <AudioPlayer />
    </BrowserRouter>
  );
}

export default App;
