import React from 'react';
import { Logo } from '../../utils/Icons';
import { AppContainer } from './styled';


function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        Filmes
      </header>
    </AppContainer>
  );
}

export default App;
