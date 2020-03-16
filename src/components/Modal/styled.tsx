import styled from 'styled-components';
import Theme from '../../utils/Theme';
import { IconClose } from '../../utils/Icons';

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background-color: ${Theme.BackgroundColor};
    visibility: hidden;
    transition: all .3s ease-in-out;
    opacity: 0;
    

    &.visible{
        visibility: visible;
        opacity: 1;
    }

    .close-button{
        position: absolute;
        right: 30px;
        top: 30px;
        appearance: none;
        background: transparent;
        background-image: url(${IconClose});
        background-repeat: no-repeat;
        border: none;
        text-indent: -9999px;
        cursor: pointer;
        outline: none;
    }
`

export const ModalWrapper = styled.div`
    padding: 15px ${Theme.ContainerPadding};
    display: block;
    width: 100%;
    max-width: ${Theme.ContainerWidth};
    margin: 0 auto;

    span{
        font-size: 82px;
        font-weight: 700;
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        margin-top: 50px;
        li{
            display: inline-block;
            margin-right: 30px;
            transition: all .3s ease-in-out;

            &:last-of-type{
                margin-right: 0;
            }

            &.active{
                button{
                    color: ${Theme.Orange};
                }
            }

            

            button{
                color: ${Theme.White};
                font-size: 18px;
                appearance: none;
                background: transparent;
                border: none;
                cursor: pointer;
                outline: none;
            }
        }
    }
`

export const ModalFloat = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`