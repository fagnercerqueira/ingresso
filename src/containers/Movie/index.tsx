import React from 'react';
import Header from '../../components/Header';
import MovieItem from '../../components/Movie';
import { RouteComponentProps } from 'react-router-dom';
import { MainConsumer } from "../../Providers/MainProvider";

interface MovieProps extends RouteComponentProps{ 
  match: any
}
interface MovieState {currentMovie: string}


class Movie extends React.Component<MovieProps, MovieState> {

    constructor(props: MovieProps){
        super(props);

        this.state = {
            currentMovie: props.match.params.slug
        }
        console.log('props',props)
        console.log('Slug',props.match.params.slug);
    }

    //Add Body class
    public componentDidMount() {
      document.body.classList.add('movie-item');
    }
  
    public componentWillUnmount() {
      document.body.classList.remove('movie-item');
    }

  

    public render(){
      
      
      return (
        <div className="App">
          <Header />
          
          <MainConsumer>
                {({ results }) => (
                    (results || []).filter((data: any) => {
                      return data['event'].urlKey === this.state.currentMovie;
                    }).map((data: any, index: number) => {
                      console.log('data',data)
                      return <MovieItem data={data['event']} key={index}></MovieItem>
                    })
                )}
          </MainConsumer>
        </div> 
      );
    }
}

export default Movie;