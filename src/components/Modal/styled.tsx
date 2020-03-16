import styled from 'styled-components';
import Theme from '../../utils/Theme';

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
`
