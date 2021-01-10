import { useState, useEffect } from 'react';
import axios from 'axios';


const useMovies = () => {
  const [movies, setMovies] = useState([]);

  
  const search = async (term) => {
    const key = process.env.REACT_APP_OMDB_API_KEY;
    const newLocal = 'http://www.omdbapi.com/';
    const response = await axios.get(newLocal, {
      params: {
        s: decodeURI(term),
        apikey: key,
        
      },
    });
    console.log(response);
    setMovies(response.data.Search); 
   /* let test = [
      {Title: "harry potter and the sorcerers stone",
      Year: "1890",
      imdbID: "1",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      },
      {Title: "harry potter and the sorcerers stone",
      Year: "1890",
      imdbID: "2",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      },
      {Title: "harry potter and the sorcerers stone",
      Year: "1890",
      imdbID: "3",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      },
      {Title: "harry potter and the sorcerers stone",
      Year: "1890",
      imdbID: "4",
      poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
      },

    ];
    //const test2 = test.map(item=>item.nominated=false);
    for(let item in test){
      test[item]['nominated']="false";
    }
    console.log(test);
    setMovies(test); */
    
  };
  
  return [movies, search, setMovies];
};

export default useMovies;
