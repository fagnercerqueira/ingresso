import styled from 'styled-components';
import Theme from "../../utils/Theme";
export const HeaderContainer = styled.div`
    padding: 15px ${Theme.ContainerPadding};
    @media(min-width: 1200px){

    }
    display: block;
    width: 100%;
    max-width: ${Theme.ContainerWidth};
    margin: 0 auto;
    @media only screen and (max-width: 600px){
        
    }
`;

export const Brand = styled.div`
    display: inline-block;
    width: 30%;
    vertical-align: middle;
    img{
        width: 100%;
        height: auto;
        vertical-align: top;
    }
    @media only screen and (max-width: 600px){
            
    }
`;