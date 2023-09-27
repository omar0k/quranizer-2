import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, AUDIO_URL } from "../utils";
const AudioPlayer = ({ isShowing }) => {
  const [chapterAudioURLs, setChapterAudioURLs] = useState([]);
  const { chapterId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const audioResponse = await axios.get(
          `${BASE_URL}/quran/recitations/1/?chapter_number=${chapterId}`
        );
        const completeAudioLinks = audioResponse.audio_files.map(
          (audio) => `https://verses.quran.com/${audio.url}`
        );
        setChapterAudioURLs(completeAudioLinks);
      } catch (error) {
        console.error("Request failed or timed out:", error);
      }
    };
    fetchData();
  }, [chapterId]);
  console.log(chapterAudioURLs);

  return (
    isShowing ?? (
      <div>
        <h3>AudioPlayer</h3>
      </div>
    )
  );
};
export default AudioPlayer;
