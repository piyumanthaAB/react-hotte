import styled from "styled-components";
import cover from './../../img/llinebg.png';


export const SecondaryContainer = styled.div`
    display: flex;
    min-height: 25vh;
    flex:1 ;
    /* padding: 2rem 20rem; */
    padding: ${props=> props.padding || "2rem 20rem"};
    border-radius: ${props=> props.borderRadius || "initial"};
    background-color: #ff702a;
    /* opacity: .5; */
    /* margin-bottom: 20rem; */

    
    position: relative;

    &::before{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-image: url(${cover});
        /* background-size: cover; */
        background-position: center;
        background-repeat: no-repeat;
    }

`
export const SecondaryInfoElement = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

`

export const SecondaryIcon = styled.div`
    min-width: 8rem;
    min-height: 8rem;
    background-color: #ffffff5c;
    border-radius: 50rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    margin-right: 1rem;
`
export const SecondaryDetails = styled.div`
    display: flex;
    flex: 0 1 65%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`