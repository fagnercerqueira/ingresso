// import React, { createContext, useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

export type MainContextProps = {
    openModal: () => void,
    closeModal: () => void,
    getData: (id: number) => void,
    setCity: () => void,
    modalIsOpen: boolean,
    results: [],
    cities: {},
    currentCity: number
}

export const MainContext = React.createContext<MainContextProps>(null!);

type Props = {
}

type State = {
    modalIsOpen: boolean, 
    results: []
}


export class MainProvider extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            results: []
        };
    }

    cities = {
        'sao-paulo': {
            id: 1,
            title: 'São Paulo'
        },
        'rio-de-janeiro': {
            id: 1,
            title: 'Rio de Janeiro'
        }
    }

    results = {}

    currentCity = 1

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        });
    };

    getData = (id: number) => {
        let query = id || 1;
        axios.get(`https://yacdn.org/serve/https://api-content.ingresso.com/v0/templates/highlights/${query}/partnership/home`)
            .then((response) => {
                console.log('response',response);
                this.setState({
                    results: response.data
                }); 
            } ).then(data => console.log('data', data))
    }

    setCity = () => {
        this.setState({
            modalIsOpen: false,
        });
    };


    componentDidMount() {
        this.getData(1);
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
                        cities: this.cities,
                        modalIsOpen: this.state.modalIsOpen,
                        results: this.state.results,
                        currentCity: this.currentCity
                    }}
                >
                    {children}
                </MainContext.Provider>
        );
    }
}

export const MainConsumer = MainContext.Consumer;


// {/* <Modal /> */}