import React from "react";
import { FilterContainer } from './styled';

interface FilterState {
    activeFilters: string[]
}
const elements: any[] = ['2D', '3D', 'Dub', 'Leg', 'D-box'];



export class Filter extends React.Component<{}, FilterState>{
    public render() {
        return (
            <FilterContainer>
                <div className="title-wrapper">
                    <h3>Movies</h3>
                </div>
                
                <ul>
                {elements.map((value, index) => {
                     return <li key={index}> <label htmlFor={value}>{value}</label> <input type="checkbox" id={value} value={value} /></li>
                })}
                </ul>
            </FilterContainer>
        )
    }
}

export default Filter;