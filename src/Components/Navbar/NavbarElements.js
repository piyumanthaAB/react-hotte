import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from 'framer-motion';
// import LogoSrc from '../../img/logo.png';

// Animations

const fadeDown = keyframes`
    0%{
        display: flex;
        opacity:0;
        transform: translateY(-20rem);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`



export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100vw;
    min-height: 10vh;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20rem;
    background-color: #222222ba;
    font-family: "Poppins", sans-serif;
    flex-wrap: wrap;

    @media screen and (max-width:1250px){
        padding: 1rem 10rem;
        /* background-color: red; */
    } 
     
`



export const NavbarBrad = styled.div`
    /* flex: 0 1 5%; */
    width:25rem;
    height: 7rem;
    /* background-color: red; */
    display: flex;

    
`

export const NavbarBrandImage = styled.img`
    
`

export const NavbarBrandTextContainer = styled.div`
    flex:0 0 50%;
    /* background-color: chartreuse; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`;

export const NavbrandText = styled.p`
    color:${props => props.color};
    display: flex;
    align-items: center;
    font-size: 1.5rem;

    &:not(:last-child){
        margin-bottom: .7rem;
    }
`


export const NavLinks = styled(motion.div)`
    flex: 0 1 50%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ff702a;
    border-radius: 5rem;
    padding: .7rem 1rem;

    /* transform: translateY(-20rem); */

    

    @media screen and (max-width:1000px){
        transform: translateY(0);
        margin: 1rem 0 2rem;
        order: 1;
        border-radius: 1rem;
        flex: 70%;
        flex-direction: column;
        padding: 1rem 0;
        
    }
`
export const NavLink = styled(Link)`
    backface-visibility: hidden;
    color: black;
    padding: 0 .6rem;
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 3.5rem;
    /* padding-bottom: 0.7rem; */
    border-bottom: 2px solid transparent;
    position: relative;

    transition: color .3s;
    
    &::before{
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #FFF;
        /* visibility: hidden; */
        transition: all 0.3s ease-in-out;
    }

    &:hover&::before{
        visibility: visible;
        width: 100%;
    }

    &:hover{
        color: white;
    }

    &:focus&::before{
        visibility: visible;
        width: 100%;
    }

    @media screen and (max-width:1000px){
        &:not(:last-child){
            margin-bottom: 1rem;
        }
        
    }

    
`
export const NavNumberConainer = styled.div`
    background-color: black;
    border-radius: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavNumber = styled.p`
    color: white;
    padding:1.5rem 2rem;
    font-size: 1.5rem;
    transition: all .3s;

    &:hover{
        color: #ff702a;
        cursor: pointer;
    }
`

export const NavbarExpand = styled.div`
    width: 5rem;
    height: 4rem;
    display: flex;
    border-radius: 1rem;
    border: 2px solid #ff702a;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width:1000px){
        display: none;
    }
`

export const NavbarExpandIcon = styled.span`
display: flex;
justify-content: center;
align-items: center;
    font-size: 3rem;
    color: #ff702a;
`

