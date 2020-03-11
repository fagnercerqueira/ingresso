import React from "react";
import { SearchContainer } from './styled';


interface SearchState {
    value: string;
}

export class Search extends React.Component<{}, SearchState>{

    constructor(props: {}) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({value: event.currentTarget.value});
        console.log('State', this.state.value)
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('Busca: ' + this.state.value);
        event.preventDefault();
    }
    

    public render() {
        return (
            <SearchContainer>
                <form onSubmit={this.handleSubmit}>
                    <input id="search" type="text" placeholder="Search movie title" value={this.state.value} onChange={this.handleChange} required/>
                    <input type="submit" value="Search" />
                </form>
            </SearchContainer>
        )
    }
}

export default Search;