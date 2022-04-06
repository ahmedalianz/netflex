import { useEffect, useState } from "react";

import Featured from "components/Featured";
import Footer from "components/Footer";
import Frequent from "components/Frequent";
import List from "components/List";
import Section1 from "components/Section1";
import Section2 from "components/Section2";
import Section3 from "components/Section3";
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
      </div>
      <hr />
      <Section1 />
      <hr />
      <Section2
        image="images/1.jpg"
        title="Download your shows to watch offline."
        desc="Save your favorites easily and always have something to watch."
      />
      <hr />
      <Section3 />
      <hr />
      <Section2
        image="images/3.png"
        title="Create profiles for kids."
        desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      />
      <hr />
      <Frequent />
      <hr />
      <Footer />
    </div>
  );
}
