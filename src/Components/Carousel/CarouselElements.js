import styled from "styled-components";
import circle from './../../img/circle1.png';

export const CarouselContainer = styled.div`
    /* display: flex; */
    width: 100%;
    padding: 5rem 20rem;
    text-align: center;
    /* background-color: red; */
`

export const CarouselRow = styled.div`
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    align-items: stretch;
    margin: 2rem 0;
    
`

export const CarouselLeft = styled.div`
    flex: 0 1 20%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

`;

export const CarouselWrapper = styled.div`
    flex: 0 1 70%;
    /* background-color: green; */
    margin: 0 2rem;
    overflow: hidden;
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
`

export const CarouselRight = styled.div`
    flex: 0 1 20%;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    

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

`

export const CarouselCardImg = styled.img`
    width: 15%;
    margin: 0 auto 1rem;
`