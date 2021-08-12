import styled from "styled-components";

import HeaderCover from './../../img/header.jpg';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 70vh;
    background-color: red;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;


    

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

export const HeaderCaptionContainer = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
    min-height: 10vh;
    align-self: center;
    flex: 0 1 70%;
    flex-direction: column;
    /* background-color: red; */
    font-family: "Poppins", sans-serif;
`
export const HeaderSideImage = styled.img`
    position: absolute;
    top: 46%;
    left: 7%;
    z-index: 1;
    height: auto;
    width: 15rem;
`