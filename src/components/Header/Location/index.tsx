import React from "react";
import { LocationContainer } from './styled';


interface LocationState {
    active: boolean,
    current: string
}

export class Location extends React.Component<{}, LocationState>{
    public render() {
        return (
            <LocationContainer>
               Location
            </LocationContainer>
        )
    }
}

export default Location;