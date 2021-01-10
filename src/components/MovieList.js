import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMovieSelect, action}) => {

    console.log(movies);
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


  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default MovieList;
