import React from "react";
import { LocationContainer } from './styled';
import { IconPin } from '../../../utils/Icons';

interface LocationState {
    active: boolean,
    current: string
}

export class Location extends React.Component<{}, LocationState>{
    public render() {
        return (
            <LocationContainer>
                <a href="/" title="Set Location">
                     <span>Rio de Janeiro</span>
                    <img src={IconPin} className="location" alt="Location"/>
                </a>
            </LocationContainer>
        )
    }
}

export default Location;