import React from 'react';
// import { GetEmbed } from '../../../utils/Helpers';

interface TrailersProps {
    trailers: []
}

interface TrailersState {
    trailers: []
}


export class Trailers extends React.Component<TrailersProps,TrailersState>{

    state: TrailersState = {
        trailers: []
      };
    
    public render() {
        return (
            <span>Trailers</span>
        )
    }
}

export default Trailers;