import React from 'react';
import { MovieContainer, ContentContainer, Infos } from './styled';
import { GetPoster } from '../../utils/Helpers';
import { Trailers } from './Trailers';

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



/**
 *
 *
 * @export
 * @class MovieItem
 * @extends {React.Component<MovieProps, MovieState>}
 */
export class MovieItem extends React.Component<MovieProps, MovieState>{

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
                <figure>
                    <img src={GetPoster(this.state.images, 'PosterHorizontal')} alt={this.state.title} />
                </figure>

                <ContentContainer>
                    <img src={GetPoster(this.state.images, 'PosterPortrait')} alt={this.state.title} />
                    <Infos>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.synopsis}</p>
                        {
                            this.state.trailers.length > 0 ? <Trailers trailers={this.state.trailers}></Trailers> : false
                        }
                        
                    </Infos>
                </ContentContainer>

            </MovieContainer>
        )
    }
}

export default MovieItem;