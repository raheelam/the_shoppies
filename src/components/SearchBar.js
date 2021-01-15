import React, { useEffect, useState } from 'react';

const SearchBar = ({ onFormSubmit ,setSearchTerm}) => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  
    
  
  useEffect(() => {                                                                                                    
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 800);
     

    return () => {
      
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
      
  const submit =()=>{onFormSubmit(debouncedTerm);}
    submit();
  }, [debouncedTerm,onFormSubmit]);

  const onSubmit = (event) => {
    event.preventDefault();
    if(term.length > 0){
      
      onFormSubmit(term);

    }
   
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Movie Search</label>
          <div className="ui icon input ">
            <input type="text" 
            placeholder="Search for a movie by title..."
            value={term}
            onChange={(event) => {setTerm(event.target.value);
              setSearchTerm(event.target.value); 
            }}
            />
            <i className="search  icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
