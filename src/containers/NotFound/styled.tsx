import styled from 'styled-components';
import Theme from "../../utils/Theme";
import Background from "../../assets/images/notfound.gif";



export const NotFoundContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    text-align: center;
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;

    &:after{
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        opacity: .9;
        background-color:${Theme.BackgroundColor};
    }
    .text-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 999;
    }
    h1{
        font-size: 92px;
        color: ${Theme.Orange};
        span{
            display: block;
            font-size: 18px;
            margin-top: 15px;
            font-weight: 400;
            color: ${Theme.White};
        }
    }
    a{
        color: ${Theme.White};
        text-decoration: none;
    }
  `