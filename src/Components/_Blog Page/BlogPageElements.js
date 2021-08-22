import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlogCradsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    /* min-height: 60vh; */
    background-color: white;
    padding: 5rem 20rem;
    justify-content: space-between;

    @media screen and (max-width:1400px){
        padding: 5rem 15rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 8rem;
        /* max-height: 120vh; */

    }
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1000px){
        min-height: unset;
        /* max-height: 120vh; */
    }
    @media screen and (max-width:760px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* max-height: 120vh; */
    }
    /* styled for screen size 500px or less */
    @media screen and (max-width:500px){
        padding: 5rem 5rem;

    }
    /* styled for screen size 400px or less */
    @media screen and (max-width:400px){
        padding: 5rem 3rem;

    }
`

export const BlogCard = styled.div`
    flex: 0 1 30%;
    /* height: 50vh; */
    border-radius: 1rem;
    margin: 2rem 0;
    border: 1px solid #dbd4d2;

    transition: all .3s;

    &:hover{
        border: 1px solid #ff702a;
    }

    /* styled for screen size 1200px or less */
    @media screen and (max-width:1100px){
    flex: 0 1 48%;
        
    }
    @media screen and (max-width:760px){
        flex: 0 1 60%;
        
    }

`

export const BlogCardTop = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 1rem;
`

export const BlogCardImg = styled.img`
    width: 100%;
    height: auto;
`
export const BlogCardBottom = styled.div`
    width: 100%;
    height: auto;
    padding: 4rem 2rem 2rem;
    position: relative;

    @media screen and (max-width:1400px){
       
    }
`

export const BlogCardTitle = styled(Link)`
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    color: #232323;
    line-height: 1.2;

    @media screen and (max-width:400px){
        font-size: 1.5rem;
    }
    
`

export const BlogCardDetails = styled.p`
    font-size: 1.3rem;
    color: #494442;
    line-height: 1.6;
    margin-top: 2rem;

    @media screen and (max-width:400px){
        font-size: 1.1rem;
    }
`
export const BlogCardBtn = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    background-image: linear-gradient(to right, #f65e26, #d41d18);
    padding: .5rem 2rem;
    color: white;
    border-radius: 50rem;
    position: absolute;
    top: 0;
    left:6%;

`