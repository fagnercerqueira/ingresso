import styled from 'styled-components';
import Theme from '../../../utils/Theme';
export const TrailersContainer = styled.div`
    margin-top: 30px;
    .trailer{
        margin-top: 30px;
    }

    button{
        display: inline-block;
        appearance: none;
        text-align: center;
        color: ${Theme.White};
        margin-right: 15px;
        border-radius: 4px;
        padding: 10px 30px;
        box-sizing: border-box;
        border: none;
        background-color: ${Theme.Orange};
        transition: all .3s ease-in-out;
        outline: none;
        text-transform: uppercase;
        cursor: pointer;

        &:last-of-type{
            margin-right: 0;
        }

        &.inactive{
            background-color: ${Theme.Blue}
        }
    }
}`