import React from "react";
import { MainContext } from "../../Providers/MainProvider";
import { ModalContainer, ModalWrapper, ModalFloat } from './styled';

const MainModal = () => {

    const mainContext = React.useContext(MainContext);
    const setCity = (event: any, cityId: number) => {
        event.preventDefault()
        mainContext.setCity(cityId)
    }
    const closeModal = () => {
        mainContext.closeModal()
    }
    
    return (
        <ModalContainer className={mainContext.modalIsOpen ? 'visible' : 'hide'}>
            <button className="close-button" onClick={closeModal}>Close</button>
            <ModalWrapper>
                <ModalFloat>
                    <span>Choose your location</span>
                    <ul>
                        {
                            (mainContext.cities || []).map((data:any, index: any) => {
                                return <li  key={index} className={data.id === mainContext.currentCity ? 'active' : ''}><button onClick={(event: any) => {setCity(event, data.id)}} >{data.title}</button></li>;
                            })
                        }
                    </ul>
                </ModalFloat>
            </ModalWrapper>
        </ModalContainer>
    )

}

export default MainModal;