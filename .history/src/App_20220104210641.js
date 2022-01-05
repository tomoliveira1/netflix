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
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  )
}