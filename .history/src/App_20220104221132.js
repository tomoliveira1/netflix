import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./requests";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista de todas as requisições

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o filme em destaque
    };

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
