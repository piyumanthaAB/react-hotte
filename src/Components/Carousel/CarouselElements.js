import styled from "styled-components";
import circle from './../../img/circle1.png';

export const CarouselContainer = styled.div`
    /* display: flex; */
    width: 100%;
    padding: 5rem 20rem;
    text-align: center;
    /* background-color: red; */
    @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }
    
    @media screen and (max-width:1000px){
        padding: 5rem 0rem;
        

    }
    @media screen and (max-width:760px){
        padding: 5rem 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    @media screen and (max-width:500px){
        padding: 2rem 2rem;

    }
    @media screen and (max-width:400px){
        padding: 2rem 0rem;

    }
`

export const CarouselRow = styled.div`
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: stretch;
    margin: 2rem 0;

    @media screen and (max-width:760px){
        display: flex;
        justify-content: center;

    }
    
`

export const CarouselLeft = styled.div`
    flex: 0 1 20%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width:760px){
        display: none;

    }

`;

export const CarouselWrapper = styled.div`
    flex: 0 1 70%;
    /* background-color: green; */
    margin: 0 2rem;
    overflow: hidden;
    @media screen and (max-width:760px){
        flex: 0 1 90%;
    }

    
`

export const CarouselSlide = styled.div`
    /* width: 100%; */
    background-color: #feeee7;
    background-image: url(${circle});
    border-radius: 1rem;
    padding: 5rem 9rem;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center;

    @media screen and (max-width:600px){
        padding: 5rem 5rem;

    }
    @media screen and (max-width:500px){
        padding: 3rem 3rem;

    }
    @media screen and (max-width:400px){
        padding: 3rem 2rem;

    }
`

export const CarouselRight = styled.div`
    flex: 0 1 20%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width:760px){
        display: none;

    }

`;

export const CarouselSideImg = styled.img`
    width: 40%;
`

export const CarouselArrowLeft = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15%;
    left: 10%;
    z-index: 2;
    font-size: 3rem;
    transition: all .3s;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        color: #fd6f2a;
    }
    @media screen and (max-width:760px){
        display: none;
    }
`

export const CarouselArrowRight = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 15%;
    right: 10%;
    z-index: 2;
    font-size: 3rem;
    transition: all .3s;

    
    &:hover {
        cursor: pointer;
        color: #fd6f2a;
    }

    @media screen and (max-width:760px){
        display: none;
    }

`

export const CarouselCardImg = styled.img`
    width: 15%;
    margin: 0 auto 1rem;

    @media screen and (max-width:1000px){
        width: 20%;

    }
    @media screen and (max-width:760px){
        width: 30%;

    }
`

export const CarouselInnerTitle = styled.p`
    font-size: 2rem;
    font-weight: 700;
    color: #0a0626;
    margin: 1rem 0;

    @media screen and (max-width:760px){
        font-size: 1.5rem;
    }
`
export const CarouselOuterTitle = styled.p`
    font-size: 3.8rem;
    font-weight: 700;
    color: #0a0626;
    margin: 1rem 0;

    @media screen and (max-width:760px){
        font-size: 3.3rem;
    }
    @media screen and (max-width:400px){
        font-size: 2.5rem;
    }
    
`
export const CarouselInnerText = styled.p`
    font-size: 1.4rem;
    font-weight: 300;
    color: #807670;
    @media screen and (max-width:760px){
        font-size: 1.2rem;
    }
`