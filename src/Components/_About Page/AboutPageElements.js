import { Link } from "react-router-dom";
import styled from "styled-components";

// ================================= ABOUT STORY ELEMENTS START ==================================

export const AboutStoryContainer = styled.div`
    display: flex;
    min-height: 70vh;
    background-color: white;
    justify-content: space-between;
    padding: 5rem 20rem;
`

export const AboutStoryLeft = styled.div`
    flex: 0 1 48%;
    display: flex;
    align-items: center;
`;

export const AboutStoryLeftContent = styled.div`
    flex: 1;
    background-color: #feeee7;
    min-height: 60vh;
    display: flex;
    padding: 2.5rem 2rem;
    border-radius: 1rem;
    /* justify-content: center; */
    /* align-items: flex-start; */
    flex-direction: column;
    text-align: center;
`
export const AboutStoryTitleRow = styled.div`
    display: flex;
    flex: 0 1 100%;
    background-color: white;
    padding: 1rem 2rem;
    justify-content: space-between;
    border-radius: 1rem;
`

export const AboutStoryTitleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #feeee7;
    flex: 0 1 30%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: .5rem;
    cursor: pointer;
    border: none;

    transition: all .3s;

    &:focus{
        background-color: #ff702a;
        color: white;
        outline: none;
    }
`

export const AboutStoryRight = styled.div`
    flex: 0 1 48%;
    overflow: hidden;
    min-height: 30vh;
    border-radius:3rem;
    display: flex;
`;

export const AboutImage = styled.img`

`

// ================================= ABOUT STORY ELEMENTS END ==================================

// ================================= ABOUT CHEFs ELEMENTS START ==================================

export const AboutChefsContainer = styled.div`
    flex: 1;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
export const AboutChefsTitle = styled.div`
    flex: 0 1 20%;
    align-self: center;
    text-align: center;
    width: 35%;

`

export const AboutChefsCardContainer = styled.div`
    flex: 1;
    min-height: 30vh;
    /* background-color: green; */
    display: flex;
    padding: 5rem 20rem;
`
export const AboutChefsCardRow = styled.div`
    display: flex;
    flex: 1;
    /* background-color: red; */
    justify-content: space-between;
    flex-wrap: wrap;
`

export const AboutChefsCard = styled.div`
    flex: 0 1 48%;
    min-height: 45vh;
    background-color:#feeee7 ;
    border-radius: 2rem;
    justify-content: space-between;
    display: flex;
    padding: 1.5rem;
    margin: 2rem 0;
`

export const AboutChefsCardImgContainer = styled.div`
    /* display: flex; */
    flex: 0 1 40%;
    border-radius: 2rem;
    /* background-color: red; */
`
export const AboutChefsImg = styled.img`
    width: 100%;
`;

export const AboutChefsCardRight = styled.div`
    display: flex;
    flex:0 1 56% ;
    flex-direction: column;
`

export const AboutChefsName = styled.p`
    color: #0a0626;
    font-size: 2.4rem;
    font-weight: 500;
    transition: all .3s;
    display: flex;
    
    

    &:hover{
        color:#ff702a ;
        cursor: pointer;
    }

`

export const AboutChefsIconRow = styled.div`
    display: flex;
    min-height: 10vh;
    background-color: white;
`

// ================================= ABOUT CHEFs ELEMENTS END ==================================
