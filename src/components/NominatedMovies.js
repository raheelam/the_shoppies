import MovieList from './MovieList';


const NominatedMovies = ({ onRemove, nominatedMovies}) => {
  //const [nominatedMovies, setNominatedMovies] = useState([]);
  
 
 
  
  if (nominatedMovies.length === 0) {
    return <div>You haven't nominated any movies yet.</div>;
  }
console.log("nominated: moviees: "+ nominatedMovies);

  return (
    <MovieList  movies={nominatedMovies} action="remove" onMovieSelect = {onRemove}/>
  );
};

export default NominatedMovies;
