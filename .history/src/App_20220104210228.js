import React, { useEffect, useState } from 'react';
import Tmdb from './requests'

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista de todas as requisições

      let list = await Tmdb.getHomeList();
      setMovieList(list);
    } 

    loadAll();
  }, [])

  return(
    <div>
      Netflix Clone - React
    </div>
  )
}