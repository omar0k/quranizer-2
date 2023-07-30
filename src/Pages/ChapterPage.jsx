import { useEffect, useState } from "react";
import { BASE_URL } from "../utils";
import { useParams } from "react-router-dom";
import axios from "axios";
const ChapterPage = () => {
  const [chapterText, setChapterText] = useState([]);
  const { chapterId } = useParams();
  useEffect(() => {
    const getChapterText = async () => {
      axios
        .get(BASE_URL + `/quran/verses/indopak&chapter_number=${chapterId}`)
        .then((response) => {
          setChapterText(response.data.verses);
        });
    };
    getChapterText();
  }, [chapterId]);
  console.log(chapterText);
  return (
    <div>
      {chapterText.map((verse) => {
        return <p>{verse}</p>;
      })}
    </div>
  );
};
export default ChapterPage;
