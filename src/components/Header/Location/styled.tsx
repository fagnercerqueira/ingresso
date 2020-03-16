import styled from 'styled-components';
import { IconArrowDown } from '../../../utils/Icons';
import Theme from '../../../utils/Theme';

export const LocationContainer = styled.div`
    display: inline-block;
    width: 20%;
    vertical-align: middle;
    text-align: right;
    button{
        color: ${Theme.White};
        appearance: none;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        font-size: 14px;

        > span{
            &:after{
                content: "";
                display: inline-block;
                background-image: url(${IconArrowDown});
                background-size: contain;
                background-repeat: no-repeat;
                width: 10px;
                margin-left: 10px;
                height: 5px;
                vertical-align: middle;
            }
        }
        > img{
            display: inline-block;
            width: 20px;
            height: auto;
            margin-left: 15px;
            vertical-align: middle;
        }
    }

    
`;

