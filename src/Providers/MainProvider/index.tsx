import React from 'react';
import MainModal from '../../components/Modal'

export type MainContextProps = {
    openModal: () => void,
    closeModal: () => void,
    getData: (id: number) => void,
    setCity: (id: number) => void,
    filterMovies: (term: string) => void,
    setSearchTerm: (term: string) => void,
    modalIsOpen: boolean,
    filteredResults: [],
    results: [],
    cities: any,
    searchTerm: string,
    currentCity: number
}

export const MainContext = React.createContext<MainContextProps>(null!);

type Props = {
}

type State = {
    modalIsOpen: boolean,
    searchTerm: string,
    filteredResults: [],
    results: []
}


export class MainProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            searchTerm: '',
            filteredResults: [],
            results: []
        };
    }

    cities = [
        {
            id: 1,
            slug: 'sao-paulo',
            title: 'São Paulo'
        },
        {
            id: 2,
            slug: 'rio-de-janeiro',
            title: 'Rio de Janeiro'
        }
    ]

    results = []

    currentCity = 1

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    };


    filterMovies = (param: string) => {
        this.setState({
            filteredResults: [],
        });
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        });
    };

    getData = (id: number) => {
        fetch(`/v0/templates/highlights/${id}/partnership/home`) 
        .then((response) => response.json())
        .then((response) => {
                this.setState({
                    results: response || []
                }); 
        });
    }

    setCity = (id: number) => {
        this.getData(id);
        this.currentCity = id;
    };

    setSearchTerm = (text: string) => {
        console.log('text',text)
        this.setState({
            searchTerm: text,
        });
    };


    componentDidMount() {
        this.getData(this.currentCity);
    }




    render() {
        const { children } = this.props;

        return (
                <MainContext.Provider
                    value={{
                        openModal: this.openModal,
                        closeModal: this.closeModal,
                        setCity: this.setCity,
                        getData: this.getData,
                        filterMovies: this.filterMovies,
                        setSearchTerm: this.setSearchTerm,
                        cities: this.cities,
                        modalIsOpen: this.state.modalIsOpen,
                        results: this.state.results,
                        filteredResults: this.state.results,
                        searchTerm: this.state.searchTerm,
                        currentCity: this.currentCity
                    }}
                >
                    {children}
                    <MainModal/> 
                </MainContext.Provider>
        );
    }
}

export const MainConsumer = MainContext.Consumer;


