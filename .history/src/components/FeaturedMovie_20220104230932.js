import React from 'react';
import './FeaturedMovie.css'

export default ({item}) => {
    return (
       <section className='featured' style={{
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }}>
           <div className='featured--portrait'>
               <div className='featured--landscape'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>2099</div>
                        <div className='featured--seasons'>{item.number_of_seasons} pontos</div>
                    </div>
               </div>
           </div>
       </section>
    )
}