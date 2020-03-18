import React from 'react';
import MainModal from '../../components/Modal'

export type MainContextProps = {
    openModal: () => void,
    closeModal: () => void,
    getData: (id: number) => void,
    setCity: (id: number) => void,
    buildFilters: (id: any) => void,
    checkFilter: (item: string) => void,
    setSearchTerm: (term: string) => void,
    modalIsOpen: boolean,
    results: [],
    filters: any,
    cities: any,
    searchTerm: string,
    currentCity: number
}

export const MainContext = React.createContext<MainContextProps>(null!)

type Props = {
}

type State = {
    modalIsOpen: boolean,
    searchTerm: string,
    results: [],
    filters: any
}


export class MainProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            searchTerm:'',
            results: [],
            filters: []
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
        })
    };


    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        })
    };

    getData = (id: number) => {
        fetch(`/v0/templates/highlights/${id}/partnership/home`) 
        .then((response) => response.json())
        .then((response) => {
                this.setState({
                    results: response || []
                }) 

                this.buildFilters(response)
        })
    }
    
    buildFilters = (data: any) => {
        let allFilters:any = [];
        
        //Get all genres
        data.map((filters: any) =>  filters.event.genres).map((filter: any) => allFilters.push(...filter))

        let unicFIlters = allFilters.filter((item: string, i: number, ar: any) => ar.indexOf(item) === i ).map((item: any) => {
            return {name: item, checked: false}
        })

        this.setState({
            filters: unicFIlters
        }) 
    }

    checkFilter = (item: string) => {
        let updateFilters = this.state.filters.map((filter: any) => {
           if (filter.name === item){
            filter.checked === false ? filter.checked = true : filter.checked = false
           }
            return filter
        })
        this.setState({
            filters: updateFilters
        }) 
    }

    setCity = (id: number) => {
        this.getData(id)
        this.currentCity = id;
    };

    setSearchTerm = (text: string) => {
        this.setState({
            searchTerm: text,
        })
    };


    componentDidMount() {
        this.getData(this.currentCity)
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
                        setSearchTerm: this.setSearchTerm,
                        buildFilters: this.buildFilters,
                        checkFilter: this.checkFilter,
                        cities: this.cities,
                        modalIsOpen: this.state.modalIsOpen,
                        results: this.state.results,
                        filters: this.state.filters,
                        searchTerm: this.state.searchTerm,
                        currentCity: this.currentCity
                    }}
                >
                    {children}
                    <MainModal/> 
                </MainContext.Provider>
        )
    }
}

export const MainConsumer = MainContext.Consumer;


