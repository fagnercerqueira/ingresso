import React from 'react';
import Tuber from 'react-tuber';
import { TrailersContainer } from './styled';

interface TrailersProps {
    trailers: []
}

interface TrailersState {
    trailers: [],
    activeItem: number,
    activeTrailerUrl: string
}


export class Trailers extends React.Component<TrailersProps,TrailersState> {

    state: TrailersState = {
        trailers: this.props.trailers,
        activeItem: 0,
        activeTrailerUrl: ''
    };

    public getTrailler = (trailer: number) => {
        let trailerUrl: any = this.props.trailers.filter((item,i) =>{
            return i === trailer;
        });

        this.setState({
            activeTrailerUrl: trailerUrl[0].url,
            activeItem: trailer
        });
    }

    public componentDidMount(){
        this.getTrailler(0)
    }
    
    
    public render() {
        return (
            <TrailersContainer>
                {
                    this.props.trailers.map((item: any, index: number) =>{
                        return <button  onClick={() => this.getTrailler(index)} key={index} className={this.state.activeItem === index ?  'active' : 'inactive'}>Trailer {index}</button>;
                    })

                }
                <Tuber  src={this.state.activeTrailerUrl} aspect="5:3" className="trailer" />
            </TrailersContainer>
        )
    }
}

export default Trailers;