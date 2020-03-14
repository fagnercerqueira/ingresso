import React from 'react';
import { MovieListContainer } from './styled';
import { MovieItem } from './MovieItem';
import { MainConsumer } from "../../Providers/MainProvider";

interface MovieProps {
    title: string,
    term: string
}

interface MovieState {
    total: number,
    elements: []
}


export class Filter extends React.Component<MovieProps, MovieState>{

    public render() {
        return (
            <MainConsumer>
                {({ results }) => (
                    <MovieListContainer>
                        <div className="title-wrapper">
                            <h3>{this.props.title}</h3>
                            {this.props.term ? <span>{this.props.term}</span> : ''}
                        </div>

                        <ul>
                            {
                                results.map((data, index) => {
                                    console.log('data',data)
                                    return <MovieItem data={data['event']} key={index}></MovieItem>
                                })
                            }
                        </ul>
                    </MovieListContainer>
                )}
             </MainConsumer>
        )
    }
}

// public render() {
//     return (
        // <MainConsumer>
        //    {({ currentCity }) => (
        //         <div>
        //             You clicked { currentCity } times
        //         </div>
        //     )}
        // </MainConsumer>

//     )
// }

export default Filter;