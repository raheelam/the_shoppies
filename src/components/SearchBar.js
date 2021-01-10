import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Movie Search</label>
          <div class="ui icon input ">
            <input type="text" 
            placeholder="Search for a movie by title..."
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            />
            <i class="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
