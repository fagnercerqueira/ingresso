import React from 'react';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import MoviesList from '../../components/MoviesList';

function Search() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <MoviesList />
      </div>
    );
  }

export default Search;