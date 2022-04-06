import { useEffect, useState } from "react";

import Featured from "components/Featured";
import List from "components/List";
import axios from "axios";

export default function Home() {
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
        <List list={popular} title="Popular Movies" />
        <List list={tvShows} title="Popular Tv Shows" />
        {/* <List />
        <List />
        <List /> */}
      </div>
    </div>
  );
}
