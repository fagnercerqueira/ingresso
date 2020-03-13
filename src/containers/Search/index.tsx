import React from 'react';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

function Search() {
    return (
      <div className="App">
        <Header />
        <MoviesList title="Search result for: " term="Search term"/>
      </div>
    );
  }

export default Search;