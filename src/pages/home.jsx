import { useEffect, useState } from "react";

import Featured from "components/Featured";
import Footer from "components/Footer";
import Frequent from "components/Frequent";
import List from "components/List";
import Section1 from "components/Section1";
import Section2 from "components/Section2";
import Section3 from "components/Section3";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [tvShows, setTvShows] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    async function getLists() {
      let tvShows = await axios(
        "https://api.themoviedb.org/3/tv/popular?api_key=dfb974e88cc0ec8d3b2d98665c887559&language=en-US&page=1"
      );
      let popular = await axios(
        "https://api.themoviedb.org/3/movie/popular?api_key=dfb974e88cc0ec8d3b2d98665c887559&language=en-US&page=1"
      );
      setTvShows(tvShows.data.results);
      setPopular(popular.data.results);
    }
    getLists();
  }, []);
  return (
    <div className="home">
      <Featured />
      <div className="list-container">
        <List list={popular} title={t("Pop_Movies")} />
        <List list={tvShows} title={t("Pop_Shows")} />
      </div>
      <hr />
      <Section1 />
      <hr />
      <Section2
        image="images/1.jpg"
        title={t("Section2a_title")}
        desc={t("Section2a_title")}
      />
      <hr />
      <Section3 />
      <hr />
      <Section2
        image="images/3.png"
        title={t("Section2b_title")}
        desc={t("Section2b_desc")}
      />
      <hr />
      <Frequent />
      <hr />
    </div>
  );
}
