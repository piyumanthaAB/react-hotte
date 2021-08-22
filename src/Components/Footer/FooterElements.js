import { Link } from "react-router-dom";
import styled from "styled-components";

import openingHrsImage from './../../img/circle1.png'

export const FooterContainer = styled.div`
    
    /* background-color: #eee; */
    display: flex;
    flex-direction: column;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width:900px){
        flex-wrap: wrap;

    }

    

`;

export const FooterMain = styled.div`
    min-height: 50vh;
    display: flex;
    padding: 2rem 20rem;
    justify-content: space-between;


  /* styled for screen size 1400px or less */
     @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 7rem;

    }
    @media screen and (max-width:1000px){
        padding: 5rem 1.5rem;

    }

    @media screen and (max-width:900px){
        flex-wrap: wrap;
        padding: 5rem 6rem;

    }
    @media screen and (max-width:600px){
        padding: 5rem 2rem;

    }
    @media screen and (max-width:400px){
        padding: 5rem .5rem;

    }
    

    
    
`

// ---------------------------------------- FOOTER Social media Start-----------------------------------------------------------
export const FooterSocialMedia = styled.div`
    display: flex;
    flex: 0 1 25%;
    flex-direction: column;
    /* margin-right: 3rem; */

    @media screen and (max-width:900px){
        flex: 0 1 50%;

    }
    @media screen and (max-width:500px){
        flex: 0 1 100%;

    }
    
`

export const FooterLogoContainer = styled.div`
    display:flex;
    
    
`
export const FooterLogo = styled.img`
    width:8rem;
    height: auto;
`;

export const FooterP = styled.p`
    color:${props => props.color};
    font-size: 1.4rem;
    margin:1rem  0rem;
    min-width: 20%;

    @media screen and (max-width:400px){
        font-size: 1.1rem;


    }
`
export const FooterIconsContainer = styled.div`
        display: flex;
        margin-top: 2rem;
`

export const FooterIcon = styled.a`
    padding: 1.2rem;
    border-radius: .5rem;
    font-size: ${props => props.size};
    background-color: ${props => props.color};
    transition: all .2s;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:not(:last-child){
        margin-right: .5rem;
    }

    &:hover{
        cursor: pointer;
        /* transform: rotate(10deg); */
        transform: ${props=> (props.rotate)? "rotate(10deg)" :  "initial"};
    }
`

// ----------------------------------------- FOOTER Social media End-----------------------------------------------------------

// ---------------------------------------- FOOTER Conact Us Start-----------------------------------------------------------

export const FooterContactUs = styled.div`
    display: flex;
    flex: 0 1 30%;
    flex-direction: column;
    padding: 1rem 0 0 0;
    @media screen and (max-width:900px){
        flex: 0 1 50%;

    }
    @media screen and (max-width:500px){
        flex: 0 1 100%;

    }
`
export const FooterContactUsUnderline = styled.img`
    width: 30%;
    padding: 1rem 0 1.1rem;
`
export const FooterContactUsCard = styled.div`
    display: flex;
    margin: 1rem 0;
`

export const FooterContactUsDetails = styled.p`
    font-size: 1.4rem;
    color: #494442;
    
`
export const FooterContactUsDetailsWrapper = styled.div`
    font-size: 1.2rem;
    
`

// ---------------------------------------- FOOTER Conact Us Start-----------------------------------------------------------

// ---------------------------------------- FOOTER Open Hours Start-----------------------------------------------------------


export const FooterOpenHours = styled.div`
    display: flex;
    flex: 0 1 40%;
    border-radius: 10px;
    background-color: #feeee7;
    background-image: url(${openingHrsImage});
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:900px){
        flex: 0 1 100%;
        margin: 2rem 0;
        padding: 2rem 0;

    }
    `
export const FooterOpenHrsRow = styled.div`
    display: flex;
    align-self: stretch;
    justify-content: space-around;
    align-items: center;

    color: ${props=> props.select?'#ff702a':'initial'};
    font-weight: ${props=> props.select?'bold':'initial'};
`


// ---------------------------------------- FOOTER Open Hours End-----------------------------------------------------------


export const FooterSecondary = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #feeee7;
    padding: 2rem 20rem;
    /* margin-top: auto; */
    font-size: 1.5rem;

    @media screen and (max-width:1400px){
        padding: 2rem 10rem;
        font-size: 1.2rem;

    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 2rem 7rem;

    }
    @media screen and (max-width:1000px){
        padding: 2rem 1.5rem;

    }

    @media screen and (max-width:900px){
        padding: 2rem 6rem;

    }
    @media screen and (max-width:760px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    @media screen and (max-width:400px){
        padding: 1rem 2rem;

    }
`

export const FooterCopyRight = styled.div`
    flex:0 1 30% ;
    
`

export const FooterTerms = styled.div`
    display: flex;
    flex: 0 1 30%;
    justify-content: flex-end;

    @media screen and (max-width:900px){
        flex: 0 1 40%;

    }
    @media screen and (max-width:400px){
        flex: 0 1 40%;

    }
    
`
export const FooterLink = styled(Link)`
    text-decoration: none;
    transition: color .3s;
    color: black;

    &:hover{
        color: #ff702a;
    }
`
export const FooterSpan = styled.span`
    margin: 0 1rem;
`
