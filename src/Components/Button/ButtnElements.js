import styled from "styled-components";

import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
    min-width: 10rem;
    padding: .8rem 2.2rem;
    border-radius: 50rem;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    background-image: linear-gradient(to right,#fb6828, #cc0e15);
    backface-visibility: hidden;

    transition: all .2s;

    &:hover{
        background-image:linear-gradient(to right,transparent, transparent) ;
        border: 2px solid #fb6828;
        color: #fb6828;
    }
`

export const ButtonContainerA = styled.a`
    max-width: max-content;
    padding: .8rem 2.2rem;
    border-radius: 50rem;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size:${props=>props.size || "1.2rem"};
    text-decoration: none;
    background-image: linear-gradient(to right,#fb6828, #cc0e15);
    backface-visibility: hidden;

    transition: all .2s;

    &:hover{
        background-image:linear-gradient(to right,transparent, transparent) ;
        border: 2px solid #fb6828;
        color: #fb6828;
    }
`

export const BacktoTop = styled.h1`
    width: 5rem;
    height: 5rem;
    background-image: linear-gradient(to right, #f65f26, #d41c18);
    color: "red";
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: fixed;
    bottom: 10%;
    right: 5%;
    transition: all .3s;
    border-radius: .5rem;

    &:hover{
        cursor: pointer;
        color: black;
    }
`