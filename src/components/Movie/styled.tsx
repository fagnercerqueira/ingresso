import styled from 'styled-components';
import Theme from '../../utils/Theme';
export const MovieContainer = styled.div`
   img{
       width: 100%;
       height: auto;
       vertical-align: top;
   }

   figure{
        position: relative;
        padding: 0;
        margin: 0;
        &:before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 200px;
            background: ${Theme.BackgroundColor};
            background: linear-gradient(0deg, rgba(21,22,27,1) 0%, rgba(21,22,27,.8) 50%, rgba(0,0,0,0) 100%);
        }
   }
`;

export const ContentContainer = styled.div`
    position: relative;
    padding: 0 ${Theme.ContainerPadding};
    display: block;
    width: 100%;
    max-width: ${Theme.ContainerWidth};
    margin: -100px auto 0;

    img{
        display: inline-block;
        width: 250px;
    }
    h1{
        margin: 0 0 30px;
        font-weight: 700;
    }
    p{
        font-size: 14px;
        line-height: 22px;
    }
`;


export const Infos = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - 250px);
    padding-left: 30px;
`;