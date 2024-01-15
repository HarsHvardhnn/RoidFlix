import options from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/movieSlice';
import { useEffect } from 'react';

const useNowPlaying = () => {

    const dispatch = useDispatch();
    const getNowPlaying = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
      const response  = await data.json();
    //   console.log(response);
      dispatch(addNowPlaying(response.results));
    }
    useEffect(() => {
      getNowPlaying();
    
    },[]); 
}

export default useNowPlaying;