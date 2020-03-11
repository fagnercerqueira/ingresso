import styled from 'styled-components';
import { IconArrowDown } from '../../../utils/Icons';
import Theme from "../../../utils/Theme";

export const LocationContainer = styled.div`
    display: inline-block;
    width: 20%;
    vertical-align: middle;
    a{
        text-decoration: none;
        color: ${Theme.White};

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

