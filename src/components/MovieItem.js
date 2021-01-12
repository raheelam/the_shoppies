import './MovieItem.css';


const MovieItem = ({ movie, onMovieSelect, action }) => {
  const noimg = "https://st.depositphotos.com/1824465/1436/v/600/depositphotos_14366609-stock-illustration-vector-film-reel.jpg";
  return (
    <div  className="movie-item item">
      <img
        alt={movie.title}
        className="ui image"
        src={(movie.Poster !== "N/A")?movie.Poster:noimg}
      />
      <div className="content movie-content">
        <div className="header">{movie.Title}</div>
       
        
        <div className="meta">
        <div className="cinema"><span>Year Released: {movie.Year}</span></div>
        </div>
        

        
        <div className="extra nominate-btn">
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
