import { useEffect, useState } from "react";
import { AUDIO_URL, BASE_URL } from "../utils";
import { useParams } from "react-router-dom";

import axios from "axios";
import Player from "../Components/AudioPlayer";
const ChapterPage = () => {
  const [chapterText, setChapterText] = useState([]);
  const { chapterId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const textResponse = await axios.get(
          `${BASE_URL}/quran/verses/indopak?chapter_number=${chapterId}`
        );
        setChapterText(textResponse.data.verses);
      } catch (error) {
        console.error("Request failed or timed out:", error);
      }
    };
    fetchData();
  }, [chapterId]);
  return (
    <div>
      <button>Show Player</button>
      {chapterText.map((verse) => {
        return (
          <p key={verse.id}>
            {verse.text_indopak}
            <span>{verse.verse_key.split(":")[1]}</span>
          </p>
        );
      })}
    </div>
  );
};
export default ChapterPage;
