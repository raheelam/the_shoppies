import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import NominatedMovies from './NominatedMovies';
import './App.css';

const App = () => {
  const [nominatedMovies, setNominatedMovies] = useState([]);
 // const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, search] = useMovies();
  const [searchTerm, setSearchTerm] = useState('');
  
  
  
  

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
   // setSelectedMovie(movie);
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
    <div className="ui container padding-top " >
      <h1>The Shoppies</h1>
      <SearchBar onFormSubmit={search} setSearchTerm={setSearchTerm} />
      <div className="ui grid segment" >
        <div className="ui row "  >
          <div className="nine wide column grey"  >
            <h1>{searchTerm? `Results for "${searchTerm}":`:'Search for a movie to nominate'}</h1>
            <MovieList  onMovieSelect={onNominate} movies={movies} action="Nominate" />
          </div>
          <div className="six wide column right floated grey">
            <h1>Nominations</h1>
            <NominatedMovies  nominatedMovies={nominatedMovies} onRemove={onRemove}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
