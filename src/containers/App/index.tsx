import React from 'react';
import { AppContainer } from './styled';
import Header from '../../components/Header';
import Filter from '../../components/Filter';
import MoviesList from '../../components/MoviesList';


function App() {
  return (
    <AppContainer>
     <Header />
     <Filter />
     {/* <MoviesList title="Featured Movies" searchTerm=""/> */}
     <MoviesList title="Featured Movies"/>
    </AppContainer>
  );
}

export default App;
