import styled from 'styled-components';
import Theme from "../../utils/Theme";

export const FilterContainer = styled.div`
    padding: 15px ${Theme.ContainerPadding};
    display: block;
    width: 100%;
    max-width: ${Theme.ContainerWidth};
    margin: 0 auto;

    h3{
        font-size: 32px;
        margin: 30px 0;
    }

    ul{
        display: inline-block;
        width: 100%;
        list-style: none;
        padding: 0;

        li{
            display: inline-block;
            margin-right: 20px;
            &:last-of-type{
                margin-right: 0;
            }
            label{
                float: right;
                margin-left: 5px;
                vertical-align: middle;
                font-size: 14px;
                text-transform: uppercase;
            }
            input[type="checkbox"]{
                vertical-align: middle;
                float:  left;
                cursor: pointer;
                appearance: none;
                background: transparent;
                width: 15px;
                height: 15px;
                margin: 0;
                border: 1px solid ${Theme.White};
                &:checked{
                    background: ${Theme.White};
                    box-shadow: inset 0px 0px 0px 2px ${Theme.BackgroundColor};
                }
            }
        }
    }
`;