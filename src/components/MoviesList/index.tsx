import React from 'react';
import { MovieListContainer } from './styled';
import { MovieItem } from './MovieItem';
import { MainContext } from "../../Providers/MainProvider";



const MovieList = (props: any) => {

    const { title, searchTerm } = props;

    const mainContext = React.useContext(MainContext);

    return (
        <MovieListContainer>
            <div className="title-wrapper">
                <h3>{title}</h3>
                {searchTerm ? <span>{searchTerm}</span> : ''}
            </div>

            <ul>
                {
                    (mainContext.filteredResults || mainContext.results).map((data: any, index: number) => {
                        return <MovieItem data={data.event} key={index}></MovieItem>
                    })
                }
            </ul>
        </MovieListContainer>
    )

}

export default MovieList;