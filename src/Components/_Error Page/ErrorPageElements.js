import styled from "styled-components";
import AdImage from './../../img/testyimg.jpg'


export const ErrorMessage = styled.div`
    display: flex;
    min-height: 40vh;
    flex-direction: column;
    align-items:center ;
    padding: 4rem 0;
    font-family: "Poppins", sans-serif;
    /* background-color: green; */
`

export const ErrorImg = styled.img`
    width: auto;
    height: 15rem;
    margin-bottom: 2rem;
`
export const ErrorParagraph = styled.p`
    font-size: 1.5rem;
    color: #494442;
    display: flex;
    width: 40%;
    text-align: center;
    margin: 1rem 0;
`

export const ErrorAd = styled.div`
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
`

export const ErrorAdLeft = styled.div`
    display: flex;
    flex: 0 1 50%;
    flex-direction: column;
    position: relative;

    

`
export const ErrorAdRight = styled.div`
    display: flex;
    flex: 0 1 50%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 2rem;
    
`

export const ErrorAdPlayBtn = styled.div`
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