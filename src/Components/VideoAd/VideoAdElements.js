import styled from "styled-components";
import AdImage from './../../img/testyimg.jpg'

export const VideoAd = styled.div`
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
    /* margin:5rem 0 ; */

    @media screen and (max-width:1400px){
        padding: 5rem 7rem;
    }
    /* @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    } */
    
    @media screen and (max-width:1100px){
        padding: 5rem 4rem;
        
    }
    @media screen and (max-width:900px){
        padding: 5rem 3rem;
        
    }
    @media screen and (max-width:760px){
        padding: 8rem 10rem;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

    }
    @media screen and (max-width:600px){
        padding: 7rem 7rem;

    }
    @media screen and (max-width:400px){
        padding: 7rem 2rem;

    }
`

export const VideoAdLeft = styled.div`
    display: flex;
    flex: 0 1 50%;
    flex-direction: column;
    position: relative;

    

`
export const VideoAdRight = styled.div`
    display: flex;
    flex: 0 1 50%;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 2rem;

    @media screen and (max-width:760px){
        padding:3rem 0;


    }
    
`

export const VideoAdPlayBtn = styled.div`
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

    @media screen and (max-width:1100px){
        width: 6rem;
        height: 6rem;
        font-size: 3rem;
    }
    @media screen and (max-width:400px){
        width: 5rem;
        height: 5rem;
        font-size: 2rem;

    }
`

export const VideoAdTitle = styled.p`
    font-size: 5rem;
    color: white;
    font-weight: bold;
    line-height: 1.2;
    margin: 0 0 1rem;

    @media screen and (max-width:1200px){
        font-size: 4.5rem;  
    }
    @media screen and (max-width:1100px){
        font-size: 4.1rem;  
    }
    @media screen and (max-width:1000px){
        font-size: 3.5rem;  
    }
    @media screen and (max-width:1000px){
        font-size: 3rem;  
    }

    @media screen and (max-width:400px){
        font-size: 2.8rem;  
    }
`

export const VideoAdTitleDesc = styled.p`
    font-size: 1.5rem;
    color: white;

    
    @media screen and (max-width:1100px){
        font-size: 1.3rem;  
    }
    @media screen and (max-width:1000px){
        font-size: 1.2rem;  
    }
`