import { useState, useCallback } from 'react';
import axios from 'axios';


const useMovies = () => {
  const [movies, setMovies] = useState([]);
  
  
  const search =useCallback( async (term) => {
    if(term === ''){
      setMovies({Error: ' '});
      return;
    }
    const key = process.env.REACT_APP_OMDB_API_KEY;
    console.log(key);
    const newLocal = 'https://www.omdbapi.com/';
    const response = await axios.get(newLocal, {
      params: {
        s: decodeURI(term),
        apikey: key
        
        
      },
    });
    
    if(response.data.Error){
      
      if(response.data.Error==="Too many results."){
        setMovies({Error: "Can you please be more specific with your search? (E.g title with release year)"}); 

      }else{
       
        setMovies({Error:response.data.Error});
        
      }
      
    }else{
      
      setMovies(response.data.Search); 

    }
      

    
    
    
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
    
    
  }, []);
  
  
  return [movies, search];
};

export default useMovies;
