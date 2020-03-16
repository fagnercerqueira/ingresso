import React from "react";
import { MainContext } from "../../Providers/MainProvider";
import { ModalContainer } from './styled';

const MainModal = () => {

    const mainContext = React.useContext(MainContext);
    const setCity = (event: any, cityId: number) => {
        event.preventDefault()
        mainContext.setCity(cityId)
    }
    return (
        <ModalContainer className={mainContext.modalIsOpen ? 'visible' : 'hide'}>
            <span>Choose your location</span>
            
            <ul>
                {
                    (mainContext.cities || []).map((data:any, index: any) => {
                        return <li><button onClick={(event: any) => {setCity(event, data.id)}} key={index} >{data.title}</button></li>;
                    })
                }
            </ul>
        </ModalContainer>
    )

}

export default MainModal;