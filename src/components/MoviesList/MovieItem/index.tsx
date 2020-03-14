import React from 'react';
import { Link } from 'react-router-dom';


interface MovieProps {
    data: any
}


export class MovieItem extends React.Component<MovieProps, {}>  {
    public render() {
        return (
            <li>
                <Link to={`/movie/${this.props.data.urlKey}`}>
                    <figure>
                        <img src={this.props.data.images[0].url} alt={this.props.data.title} />
                    </figure>
                    <h2>{this.props.data.title}</h2>
                </Link>
            </li>
        )
    }
}

export default MovieItem;