import './MovieItem.css';


const MovieItem = ({ movie, onMovieSelect, action }) => {
  return (
    <div  className="movie-item item">
      <img
        alt={movie.title}
        className="ui image"
        src={movie.Poster}
      />
      <div className="content">
        <div className="header">{movie.Title}</div>
       
        
        <div class="meta">
        <div class="cinema"><span>Year Released: {movie.Year}</span></div>
        </div>
        

        
        <div class="extra nominate-btn">
        <div onClick={() =>onMovieSelect(movie)}
        
         className={`ui left floated button ${((movie.nominated==="true") && (action==="Nominate"))? 'disabled' : ''}`}>
          {action}
          
        </div>
      
      </div>
      </div>
      
    </div>
  );
};

export default MovieItem;
