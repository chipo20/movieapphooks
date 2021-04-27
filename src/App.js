import React from 'react'

import  {useState} from "react" ;
import './App.css';
import MovieList from './compoenets/movielist/MovieList';
import {MoviesData} from './compoenets/MoviesData' ;
import AddMovie from './compoenets/addmovie/AddMovie'
import Navbar from './compoenets/navbar/Navbar';

function App() {
  const[movies , setMovies]= useState(MoviesData)
  const[ratingSearch , setRatingSearch]= useState("")
  const[name , setName] = useState("")
  let AddFilm =(newmovie, e)=> {
    e.preventDefault()
    setMovies([...movies , newmovie])
  }
  return (
    <div className="App">
<header className="App-header">
 <Navbar name={name} setName={setName} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch}/>
<MovieList  movies={movies} name={name} ratingSearch={ratingSearch}/>
<AddMovie AddFilm={AddFilm}/> 
</header>   
    </div>
  );
}

export default App;
