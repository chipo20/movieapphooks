import React from 'react';
import MovieCard from '../moviecard/MovieCard';

const MovieList = ({movies,ratingSearch,name}) => {

    return (
        <div className="cards">
            {movies.filter(el=>el.name.toLowerCase().includes(name.toLowerCase().trim()) && el.rate >=(ratingSearch)
            ).map((film)=>(<MovieCard film={film} />))


            }
            
        </div>
    )
}

export default MovieList
