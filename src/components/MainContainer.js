import React from 'react'
import { useSelector } from 'react-redux';
import Title from './Title';
const MainContainer = () => {
    const movies = useSelector(store =>  store.movies?.nowPlaying);
    if(movies === null) return;
  
    const mainMovie  = movies[0];
    console.log(mainMovie);
    const {original_title, overview} = mainMovie;
    console.log(overview);
  return (
    <div>
 <Title title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
