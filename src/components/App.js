import React, { useState } from 'react';
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
  const movStyle = {
    //height: "65vh",
    //overflow: "auto"
  }
  
  return (
   
    <div className="ui container padding-top " >
    
    
    
      <h1>The Shoppies</h1>
      <SearchBar onFormSubmit={search} setSearchTerm={setSearchTerm} />
      <div className="ui grid segment" >
        <div className="ui row " style={{height:"72vh", overflow:"hidden"}} >
          <div className="nine wide column grey" style={movStyle} >
            <h3>{searchTerm? `Results for "${searchTerm}":`:'Search for a movie to nominate'}</h3>
            <MovieList  onMovieSelect={onNominate} movies={movies} action="Nominate" />
          </div>
          <div className="six wide column right floated grey" style={movStyle}>
            <h3>Nominations </h3><span className="banner" style={nominatedMovies.length===5?{display:"inline-block"}:{display:"none"}}>You have nominated 5 movies.   &nbsp; Thank You!!!</span>
            <NominatedMovies  nominatedMovies={nominatedMovies} onRemove={onRemove}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
