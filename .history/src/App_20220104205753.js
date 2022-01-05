import React, { useEffect } from 'react';
import Tmdb from './requests'
import { useEffect } from 'react/cjs/react.production.min';

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista de todas as requisições

      let list = await Tmdb.getHomeList();
      console.log(list)
    } 

    loadAll();
  }, [])

  return(
    <div>
      Netflix Clone - React
    </div>
  )
}