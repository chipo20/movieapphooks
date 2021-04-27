import React from 'react'
import Rating from "../Rating/Rating";
import './MoviesCards.css';








const MovieCard = ({film, key}) => {
    
    return (
        <div>
 <div className="container mt-5">
	<h2 className="text-center"></h2>
	<div className="row justify-content-center">
  
		
		</div>

				<div className=" card movie_card">
		  <img src={film.url} alt="img"/>
		  <div className="card-body">
          {/*<i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
		  	</i> */}
		  
		    <div className="card-title">{film.name} </div>
		   		<span className="movie_info">{film.year}</span>
		   		<span className="movie_info float-right"><Rating rate={film.rate} /> </span>
				   

		  </div>
          
		</div>   
        </div>
        </div>
    )
}

export default MovieCard
