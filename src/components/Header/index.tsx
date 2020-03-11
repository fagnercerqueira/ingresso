import React from "react";
import { HeaderContainer, Brand} from './styled';
import { Logo } from '../../utils/Icons';
import Search from './Search';
import Location from './Location';
import { Link } from "react-router-dom";
interface HeaderState{}

export class Header extends React.Component<HeaderState>{
    public render() {
      return  (
        <header className="App-header">
          <HeaderContainer>
            <Brand>
              <Link to="/">
                <img src={Logo} className="App-logo" alt="logo" />
              </Link>
            </Brand>
            <Search/>
            <Location/>
          </HeaderContainer>
          Filmes
        </header>
      )
    }
}

export default Header;