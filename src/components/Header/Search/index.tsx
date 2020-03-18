import React from "react";
import { SearchContainer } from './styled';
import { MainContext } from "../../../Providers/MainProvider";

const Search = () => {

    const mainContext = React.useContext(MainContext)
    
    const handleChange = (event: any) => {
        mainContext.setSearchTerm(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }



    return (
        <SearchContainer>
            <form onSubmit={handleSubmit}>
                <input id="search" type="text" placeholder="Search movie title"  value={mainContext.searchTerm} onChange={handleChange} required />
                <input type="submit" value="Search" />
            </form>
        </SearchContainer>
    )

}

export default Search