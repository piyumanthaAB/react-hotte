import styled from "styled-components";
import cover from './../../img/llinebg.png';


export const SecondaryContainer = styled.div`
    display: flex;
    min-height: 25vh;
    flex:1 ;
    padding: 2rem 20rem;
    /* padding: ${props=> props.padding || "2rem 20rem"}; */
    border-radius: ${props=> props.borderRadius || "initial"};
    background-color: #ff702a;

    
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

    @media screen and (max-width:1200px){
        padding: 2rem 10rem;
        

    }

     

`
export const SecondaryHomeContainer = styled.div`
    display: flex;
    min-height: 25vh;
    flex: 0 1 100% ;
    padding: 2rem 10rem;
    border-radius: 1rem;
    background-color: #ff702a;

    
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

    @media screen and (max-width:1200px){
        padding: 2rem 5rem;
    }

    @media screen and (max-width:900px){
        padding: 2rem 2rem;
        
    }
    @media screen and (max-width:760px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 2rem;
        flex: 0 1 70% ; 
    }
    
    @media screen and (max-width:600px){
        flex: 0 1 90% ;

    }

    @media screen and (max-width:500px){
        flex: 0 1 100% ;


    }

     

`
export const SecondaryInfoElement = styled.div`
    display: flex;
    flex: 1;
    align-items: center;

    @media screen and (max-width:760px){
        margin: 1rem 0;

    }

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

    @media screen and (max-width:900px){
        font-size: 3rem;
        min-width: 6rem;
        min-height: 6rem;
        

    }
    @media screen and (max-width:760px){
        font-size: 4rem;
        min-width: 7rem;
        min-height: 7rem;
        

    }
`
export const SecondaryDetails = styled.div`
    display: flex;
    flex: 0 1 65%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

   
    
`

export const SecondaryDetailsTitle = styled.p`
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
    @media screen and (max-width:1200px){
        font-size: 2rem;
        

    }
    @media screen and (max-width:900px){
       font-size: 1.5rem;
       

    }
    @media screen and (max-width:900px){
       font-size: 1.8rem;
       
    }
    @media screen and (max-width:900px){
       font-size: 1.5rem;
       
    }
`;

export const SecondaryDetailsDesc = styled.p`
    font-size: 1.4rem;
    color: white;
    font-weight: normal;

    @media screen and (max-width:1200px){
        font-size: 1.2rem;
        

    }
    @media screen and (max-width:900px){
       font-size: 1rem;
       

    }
    @media screen and (max-width:900px){
       font-size: 1.2rem;
       

    }
    @media screen and (max-width:400px){
       font-size: 1rem;
       

    }
`;