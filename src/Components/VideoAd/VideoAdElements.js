import styled from "styled-components";
import AdImage from './../../img/testyimg.jpg'

export const VideoAd = styled.div`
    background-image: url(${AdImage});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 30vh;
    display: flex;
    flex: 0 1 100%;
    font-family: "Poppins", sans-serif;
    padding: 10rem 20rem;
    justify-content: space-between;
    /* margin:5rem 0 ; */
`

export const VideoAdLeft = styled.div`
    display: flex;
    flex: 0 1 50%;
    flex-direction: column;
    position: relative;

    

`
export const VideoAdRight = styled.div`
    display: flex;
    flex: 0 1 50%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 2rem;
    
`

export const VideoAdPlayBtn = styled.div`
    width: 8rem;
    height: 8rem;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    border-radius: 50%;
    background-color: #fe9a6a;
    margin-right: 2rem;
    cursor: pointer;
    transition: all .3s;

    &:hover&:nth-child(1){
        transform: scale(1.1);
    }
`