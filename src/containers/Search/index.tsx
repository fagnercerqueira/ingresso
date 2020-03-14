import React from 'react';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

function Search() {
    return (
      <div className="App">
        <Header />
        <MoviesList title="Search result for: " term="Bloodshot"/>
      </div>
    );
  }

export default Search;