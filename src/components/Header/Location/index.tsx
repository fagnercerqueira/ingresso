import React from "react";
import { LocationContainer } from './styled';
import { IconPin } from '../../../utils/Icons';
import { MainContext } from "../../../Providers/MainProvider";

const Location = () => {
    
    const mainContext = React.useContext(MainContext);

    const handleClick = (event: any) =>{
        event.preventDefault();
        mainContext.openModal();
    }
    return (
        <LocationContainer>
            <button onClick={handleClick} title="Set Location">
                <span>Rio de Janeiro</span>
                <img src={IconPin} className="location" alt="Location" />
            </button>
        </LocationContainer>
    )

}

export default Location;