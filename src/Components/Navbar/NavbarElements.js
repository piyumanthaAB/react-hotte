import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from 'framer-motion';
// import LogoSrc from '../../img/logo.png';






export const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100vw;
    background-color: green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 20rem;
    /* background-color: #222222ba; */
    background-color: ${props=>props.color || "#222222aa"};
    font-family: "Poppins", sans-serif;
    flex-wrap: wrap;


    @media screen and (max-width:1400px){
        padding: 1rem 10rem;
        /* background-color: red; */
    } 
    @media screen and (max-width:1200px){
        padding: 1rem 7rem;
        /* background-color: red; */
    } 
    @media screen and (max-width:500px){
        padding: 1rem 1rem;
        /* background-color: red; */
    } 
    
     
`



export const NavbarBrad = styled.div`
    /* flex: 0 1 5%; */
    width:25rem;
    height: 7rem;
    /* background-color: red; */
    display: flex;

    @media screen and (max-width:500px){
        width:20rem;
        height: 5rem;

    } 

    
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

    @media screen and (max-width:500px){
        font-size: 1.2rem;
    } 

    &:not(:last-child){
        margin-bottom: .7rem;
    }
`


export const NavLinks = styled(motion.div)`
    flex: 0 0 50%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ff702a;
    border-radius: 5rem;
    padding: .7rem 0rem .7rem 3rem;

    /* transform: translateY(-20rem); */

    @media screen and (max-width:1200px){
        flex: 0 0 55%;

    } 

    @media screen and (max-width:1000px){
        display: none;
        
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

    @media screen and (max-width:1200px){
        font-size: 1.3rem;

    } 
    @media screen and (max-width:1000px){
        font-size: 1.5rem;

    } 
    @media screen and (max-width:600px){
        font-size: 1.3rem;

    } 
    
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
    padding:1rem 2rem;
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

    @media screen and (max-width:500px){
        width: 4rem;
        height: 3rem;

    }
`

export const NavbarExpandIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    color: #ff702a;

    @media screen and (max-width:500px){
        font-size: 2rem;

    }
`

// Dropdown Menue For screen width < 1000px devices

export const NavbarDropdownContainer = styled(motion.div)`
    width: 100vw;
    min-height: 40vh;
    background-color: #ff702a;
    z-index: 10;
    border-radius: 1rem;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;

   
`