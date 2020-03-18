import React from "react";
import { FilterContainer } from './styled';
import { MainContext } from "../../Providers/MainProvider";

const Filter = () => {

    const mainContext = React.useContext(MainContext)

    const handleCheckFilter = (event: any) => {
        mainContext.checkFilter(event.target.value)
    }

      
    return (
        <FilterContainer>
                <div className="title-wrapper">
                    <h3>Movies</h3>
                </div>
                
                <ul>
                {mainContext.filters.map((filter: any, index: number) => {
                     return <li key={index}> <label htmlFor={filter.name}>{filter.name}</label> <input type="checkbox" id={filter.name} value={filter.name} checked={filter.checked} onChange={handleCheckFilter}/></li>
                })}
                </ul>
        </FilterContainer>
    )

}

export default Filter