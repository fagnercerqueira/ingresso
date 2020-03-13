import React from 'react';
import { MovieContainer, ContentContainer } from './styled';
import { GetPoster } from '../../utils/Helpers';
import { Trailers } from './Trailer';

interface MovieProps {
    data: any;
}

interface MovieState {
    id: string,
    title: string,
    synopsis: string,
    city: string,
    images: [],
    genres: [],
    trailers: []
}


export class MovieItem extends React.Component<MovieProps,MovieState>{

    state: MovieState = {
        id: this.props.data.id,
        title: this.props.data.title,
        city: this.props.data.city,
        synopsis: this.props.data.synopsis,
        images: this.props.data.images,
        genres: this.props.data.geners,
        trailers: this.props.data.trailers
      };
    
    public render() {
        return (
            <MovieContainer>
                <img src={GetPoster(this.state.images, 'PosterHorizontal')} alt={this.state.title}/>
            
                <ContentContainer>
                    <img src={GetPoster(this.state.images, 'PosterPortrait')} alt={this.state.title}/>
                    {this.state.title}
                    {this.state.synopsis}
                    <Trailers trailers={this.state.trailers}></Trailers>
                </ContentContainer>
                
            </MovieContainer>
        )
    }
}

export default MovieItem;