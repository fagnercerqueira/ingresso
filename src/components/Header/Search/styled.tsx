import styled from 'styled-components';
import Theme from "../../../utils/Theme";
import { IconSearch } from '../../../utils/Icons';


export const SearchContainer = styled.div`
    display: inline-block;
    width: 50%;
    text-align: right;
    vertical-align: middle;
    box-sizing: border-box;

    input[type='text']{
        appearance: none;
        border: none;
        background-color: ${Theme.BackgroundColor}!important;
        -webkit-box-shadow: 0 0 0 30px ${Theme.BackgroundColor} inset;
        color: ${Theme.White};
        -webkit-text-fill-color: ${Theme.White};
        border-bottom: 1px solid ${Theme.White};
        padding: 10px 0;
        margin-right: 10px;
        width: 250px;
        max-width: 100%;
        font-size: 14px;
        outline: none;
        &::placeholder{
            color: ${Theme.White};
        }
    }

    input[type='text']:-webkit-autofill, 
    input[type='text']:-webkit-autofill:hover, 
    input[type='text']:-webkit-autofill:focus, 
    input[type='text']:-internal-autofill-selected {
        background-color: ${Theme.BackgroundColor}!important;
        -webkit-box-shadow: 0 0 0 30px ${Theme.BackgroundColor} inset;
        color: ${Theme.White};
    }

    input[type="submit"]{
        appearance: none;
        text-indent: -99999px;
        border: none;
        background: transparent;
        background-image: url(${IconSearch});
        background-size: contain;
        background-repeat: no-repeat;
        width: 25px;
        height: 25px;
        display: inline-block;
        cursor: pointer;
        outline: none;
    }
`;

