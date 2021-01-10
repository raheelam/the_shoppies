import React, {useState, useEffect} from 'react';
import MovieList from './MovieList';


const NominatedMovies = ({ onRemove, nominatedMovies}) => {
  //const [nominatedMovies, setNominatedMovies] = useState([]);
  
 
 
  
  if (nominatedMovies.length === null) {
    return <div>Loading...</div>;
  }
console.log("nominated: moviees: "+ nominatedMovies);
 // setNominatedMovies((nominatedMovies.concat(movie)));
 // setNominatedMovies(nominatedMovies.concat(movie));
  
  

  return (
    <MovieList  movies={nominatedMovies} action="remove" onMovieSelect = {onRemove}/>
  );
};

export default NominatedMovies;
