import styled from "styled-components";
import { motion } from "framer-motion";
import HeaderCover from './../../img/header.jpg';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 65vh;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;


    @media screen and (max-width:400px){
        min-height: 40vh;
    }
    

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-color: rgb(0, 0, 0,.7);
    }
`
export const HeaderMainTitle = styled.p`
    font-size: 5rem;
    color: white;
    font-weight: bolder;
    position: relative;
    z-index: 5;
    @media screen and (max-width:900px){
        font-size: 4.5rem;
    }
    @media screen and (max-width:600px){
        font-size: 4rem;
    }
    @media screen and (max-width:400px){
        font-size: 3rem;
    }
    
`
export const HeaderSecondaryTitle = styled.p`
    font-size: 1.5rem;
    color: white;
    font-weight: normal;
    position: relative;
    z-index: 5;
    @media screen and (max-width:900px){
        font-size: 1.3rem;
    }
`

export const HeaderCaptionContainer = styled(motion.div)`
    display: flex;
    position: relative;
    z-index: 5;
    min-height: 10vh;
    align-self: center;
    flex: 0 1 70%;
    flex-direction: column;
    /* background-color: red; */
    font-family: "Poppins", sans-serif;

    @media screen and (max-width:760px){
        flex: 0 1 80%;
    }
    @media screen and (max-width:400px){
        flex: 0 1 90%;
    }

`
export const HeaderSideImage = styled.img`
    position: absolute;
    top: 46%;
    left: 7%;
    z-index: 1;
    height: auto;
    width: 15rem;

    @media screen and (max-width:900px){
        width: 13rem;
        top: 56%;
        left: 4%;

    }
    @media screen and (max-width:760px){
        display: none;

    }
`