import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";
const Home = () => {
  const [chapterNames, setChapterNames] = useState([]);
  useEffect(() => {
    const getChapterNames = async () => {
      try {
        const response = await axios.get(BASE_URL + "/chapters");
        setChapterNames(response.data.chapters);
      } catch (error) {
        console.log(error);
      }
    };

    getChapterNames();
  }, []);
  return (
    <div
      className=" grid grid-cols-3 gap-3
   "
    >
      {chapterNames?.map((chapter) => {
        return (
          <Link
            to={`/${chapter.id}`}
            className="w-full border border-green-300 p-4 flex justify-center"
          >
            <div>
              <span className="w-full">{chapter.name_simple}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Home;
