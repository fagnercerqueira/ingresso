import React from 'react';
import logo from '../../assets/ingresso.svg';
import { AppContainer } from './styled';


function App() {
  return (
    <AppContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppContainer>
  );
}

export default App;
