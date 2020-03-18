import React from 'react';
import { MovieListContainer } from './styled';
import { MovieItem } from './MovieItem';
import { MainContext } from "../../Providers/MainProvider";


const MovieList = () => {
    const mainContext = React.useContext(MainContext)
    const filtersChecked = mainContext.filters.filter((item: any )=> item.checked).map((filter: any) => filter.name)

    const movies = mainContext.results.filter((data: any) => {

        if(mainContext.searchTerm === ''){
            let containsFilter = filtersChecked.filter((value: any) => data.event.genres.includes(value))
            if(filtersChecked.length === 0){
                return data
            }else if(containsFilter.length !== 0){
                return data
            }
        }
        else if(data.event.title.toLowerCase().includes(mainContext.searchTerm.toLowerCase()) || data.event.genres.includes(filtersChecked)) {
            let containsFilter = filtersChecked.filter((value: any) => data.event.genres.includes(value))
            if(filtersChecked.length === 0){
                return data
            }else if(containsFilter.length !== 0){
                return data
            }
        }
    }).map((data: any, index: number)=>{
        return(
            <MovieItem data={data.event} key={index}></MovieItem>
        )
    })

    return (
        <MovieListContainer>
            <div className="title-wrapper">
                <h3>{mainContext.searchTerm !== '' ?  "Search result for: " : "Featured Movies" }</h3>
                {mainContext.searchTerm !== '' ? <span>{mainContext.searchTerm}</span> : ''}
            </div>

            <ul>
                {movies}
            </ul>
        </MovieListContainer>
    )

}

export default MovieList;