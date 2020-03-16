import React from 'react';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';
import { RouteComponentProps } from 'react-router-dom';

interface SearchProps extends RouteComponentProps{ 
  match: any
}


export class Search extends React.Component<SearchProps,{}>{

  constructor(props: SearchProps){
      super(props);
  }


    public render(){
      return (
        <div className="App">
          <Header />
          <MoviesList  title="Search result for: " searchTerm={this.props.match.params.keyword}/>
        </div>
      );
    }
  }

export default Search;