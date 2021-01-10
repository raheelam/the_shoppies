import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import NominatedMovies from './NominatedMovies'

const App = () => {
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, search, setMovies] = useMovies();
  
  
  
  

  const onRemove = (unNominated) =>{
    const id = unNominated.imdbID;
    const newNominated = nominatedMovies.filter((movie)=>movie.imdbID !== id);
    for(let movie in movies){
        if(movies[movie].imdbID === id){
            movies[movie].nominated = "false";
        }

    }

    setNominatedMovies(newNominated);
  }

  const onNominate =(movie)=>{
    if(nominatedMovies.length < 5){
    setSelectedMovie(movie);
    const id = movie.imdbID;
   // let newMovies = movies.map((movie)=>{
      //  if(movie.imdbID === id){
        //    movie.nominated = "true";
       // }
//});

for(let movie in movies){
    if(movies[movie].imdbID === id){
        movies[movie].nominated = "true";
    }

}
setNominatedMovies(nominatedMovies.concat(movie));
    // setMovies(newMovies);
    
  }
  else{
      alert("you cant choose more than five");
  }
  }
  
  
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <MovieList  onMovieSelect={onNominate} movies={movies} action="Nominate" />
          </div>
          <div className="six wide column">
            <NominatedMovies  nominatedMovies={nominatedMovies} onRemove={onRemove}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
