import React from 'react';
import { NotFoundContainer} from "./styled";
import { Link } from "react-router-dom";

function NotFound() {
    return (
      <div className="App">
        <NotFoundContainer>
          <div className="text-wrapper">
            <h1>Ops! <span>Page not found</span></h1>
            <Link to="/">Come back</Link>
          </div>
          

        </NotFoundContainer>
      </div>
    );
  }

export default NotFound;