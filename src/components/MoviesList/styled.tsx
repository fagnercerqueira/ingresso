import styled from 'styled-components';
import Theme from '../../utils/Theme';
export const MovieListContainer = styled.div`
    padding: 15px ${Theme.ContainerPadding};
    display: block;
    width: 100%;
    max-width: ${Theme.ContainerWidth};
    margin: 0 auto;

    .title-wrapper{
        display: block;
        margin: 30px 0;

        &:after{
            content: '';
            display: block;
            bottom: 0;
            width: 100%;
            border-bottom: 1px solid ${Theme.White};
            opacity: .3;
        }

        h3{
            display: inline-block;
            font-size: 32px;
            margin: 0;
            color: ${Theme.Orange};
            padding-bottom: 15px;
            position: relative;
            vertical-align: top;
            vertical-align: middle;
    
            &:after{
                content: '';
                display: block;
                position: absolute;
                bottom: -1px;
                z-index: 999;
                width: 100%;
                border-bottom: 4px solid ${Theme.Orange};
            }
        }

        span{
            vertical-align: middle;
            margin-left: 15px;
        }

        
    }

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        margin: 0 -15px;
        li{
            display: inline-block;
            width: 20%;
            float: left;
            padding: 15px;
            box-sizing: border-box;
            margin-bottom: 30px;
            a{
                display: block;
                text-decoration: none;
                transition: all .3s ease-in-out;
                transform: scale(1);
                
                &:hover{
                    transform: scale(1.1);

                    figure{
                        box-shadow: 0 0 60px 2px ${Theme.Glow};
                    }
                }

                h2{
                    margin: 15px 0 0;
                    font-size: 14px;
                    line-height: 22px;
                    font-weight: 400;
                    text-decoration: none;
                    color: ${Theme.White}
                }

                figure{
                    overflow: hidden;
                    border-radius: 8px;
                    margin: 0;
                    padding: 0;
                    box-shadow: 0 0 30px 2px ${Theme.Glow};
                    img{
                        width: 100%;
                        height: auto;
                        vertical-align: top;
                    }
                }
            }
            
        }
    }

   
`;
