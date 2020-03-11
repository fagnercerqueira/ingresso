import React from 'react';
import { NotFoundContainer} from "./styled";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div className="App">
        <NotFoundContainer>
          <div className="text-wrapper">
            <h1>Ops! <span>Página não encontrada</span></h1>
            <Link to="/">Voltar</Link>
          </div>
          

        </NotFoundContainer>
      </div>
    );
  }

export default NotFound;