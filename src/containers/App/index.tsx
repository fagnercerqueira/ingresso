import React from 'react';
import { AppContainer } from './styled';
import Header from '../../components/Header';
import Filter from '../../components/Filter';


function App() {
  return (
    <AppContainer>
     <Header />
     <Filter />
     <span>Filmes</span>
    </AppContainer>
  );
}

export default App;
