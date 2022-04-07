import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";

export default function Featured() {
  const [genres, setGenres] = useState([]);
  const currentLanguageCode = cookie.get("i18next") || "en";
  const { t } = useTranslation();
  useEffect(() => {
    async function getGenres() {
      let res = await axios(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=dfb974e88cc0ec8d3b2d98665c887559&language=en-US"
      );
      setGenres(res.data.genres);
    }
    getGenres();
  }, []);
  return (
    <div className="featured">
      <div className={`category ${currentLanguageCode === "ar" && "arabic"}`}>
        <span>{t("Movies")}</span>
        <select name="genre" id="genre">
          <option disabled selected>
            {t("Genre")}
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <img src="/images/home.jpg" alt="" />
      <div className={`info ${currentLanguageCode === "ar" && "arabic"}`}>
        <img src="/images/spi.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          aperiam! Ipsa voluptates ratione ullam incidunt exercitationem
          distinctio molestias officiis. Eveniet, omnis ea. Consequatur quam
          dicta, repellat illo itaque recusandae corporis.
        </span>
        <div className="buttons">
          <Link to="/watch">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
}
