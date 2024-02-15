import React, { useEffect, useState } from 'react'
import Globalapi from '../services/Globalapi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        Globalapi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    return (
        <div className=' flex overflow-x-auto w-full py-4 px-16'>
            {
                movieList.map((item, index) => (
                    <img className='min-w-full md:h-[400px] object-cover object-left-top' src={IMAGE_BASE_URL + item.backdrop_path} />
                )
                )
            }
        </div>
    )
}

export default Slider