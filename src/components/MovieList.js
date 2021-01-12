import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieSelect, action}) => {

    console.log(movies);
    const results = () => {
      
      if(movies.Error){
       return <p>{movies.Error}</p>;

      }else{
        const renderedList = movies.map(movie => {
          
          return (
            <MovieItem
              key={movie.imdbID}
              onMovieSelect={onMovieSelect}
              movie={movie}
              action={action}
            />
          );
        });
        return (renderedList);

      }

    }
     

        
                                         


  
      

    
  
    


  return <div style={{height:"54vh", overflow:"auto"}} className="ui relaxed divided list">{results()}</div>;
};

export default MovieList;
