import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./requests";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista de todas as requisições

      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Buscando o filme em destaque
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");

      setFeaturedData(chosenInfo);
    };

    loadAll();
  }, []);

  //Monitora a página para verificar se há rolagem
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com muita dedicação pelo <a className="link" href="https://github.com/tomoliveira1" target="_blank">Weverton Oliveira</a> <br/>
        Direitos de Imagem: netflix.com <br/>
        API utilizada: Themoviedb.org
      </footer>

      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"></img>
      </div>
    </div>
  );
};
