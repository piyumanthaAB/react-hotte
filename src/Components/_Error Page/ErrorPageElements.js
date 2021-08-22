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
    @media screen and (max-width:1000px){
        height: 12rem;
    }
    @media screen and (max-width:600px){
        height: 10rem;
    }
`
export const ErrorParagraph = styled.p`
    font-size: 1.5rem;
    color: #494442;
    display: flex;
    width: 40%;
    text-align: center;
    margin: 1rem 0;

    @media screen and (max-width:1000px){
        font-size: 1.3rem;
    }
    @media screen and (max-width:600px){
        font-size: 1.2rem;
        width: 60%;
    }
    @media screen and (max-width:400px){
        font-size: 1.2rem;
        width: 80%;
    }
`

export const ErrorTitle = styled.p`
    font-weight: 500;
    font-size: 2.5rem;
    color: #0a0626;

    @media screen and (max-width:400px){
        font-size: 2rem;

    }
`