import styled from "styled-components";

// ================================= ABOUT STORY ELEMENTS START ==================================

export const AboutStoryContainer = styled.div`
    display: flex;
    min-height: 70vh;
    background-color: white;
    justify-content: space-between;
    padding: 5rem 20rem;

    @media screen and (max-width:1400px){
        padding: 5rem 12rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 8rem;
        /* max-height: 120vh; */

    }
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1000px){
        padding: 5rem 6rem;

    }
    @media screen and (max-width:760px){
        padding: 5rem 4rem;
        flex-direction: column;
    }

    @media screen and (max-width:600px){
        padding: 5rem 2rem;

    }
    @media screen and (max-width:400px){
        padding: 3rem 2rem;

    }
`

export const AboutStoryLeft = styled.div`
    flex: 0 1 48%;
    display: flex;
    align-items: center;
    @media screen and (max-width:1400px){
        flex: 0 1 55%;

    }

    @media screen and (max-width:900px){
        flex: 0 1 63%;

    }
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

    @media screen and (max-width:500px){
        flex-direction: column;
        padding: 1rem 1rem;

    }
`

export const AboutStoryHeading = styled.p`
    font-size: 4.2rem;
    font-weight: bold;
    color: #0a0626;
    margin: 1rem 0;

    @media screen and (max-width:1100px){
        font-size: 4rem;
    }
    @media screen and (max-width:1000px){
        font-size: 3.8rem;
    }
    @media screen and (max-width:900px){
        font-size: 3.7rem;
    }
    @media screen and (max-width:600px){
        font-size: 3rem;
    }
    @media screen and (max-width:400px){
        font-size: 2.8rem;
    }
    @media screen and (max-width:370px){
        font-size: 2.2rem;
    }
`
export const AboutStoryText = styled.p`
    font-size: 1.5rem;
    font-weight: normal;
    color: #0a0626;
    margin: 1rem 0;

    @media screen and (max-width:600px){
        font-size: 1.4rem;
    }
    @media screen and (max-width:400px){
        font-size: 1.2rem;
    }
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

    @media screen and (max-width:1100px){
        font-size: 1.3rem;
    }
    @media screen and (max-width:500px){
        font-size: 1.3rem;
        margin: .2rem 0 ;
    }

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

    @media screen and (max-width:1400px){
        flex: 0 1 40%;

    }
    @media screen and (max-width:900px){
        flex: 0 1 30%;

    }
`;

export const AboutImageContainer = styled.div`
    width: 100%;
    /* min-height: 50vh; */
    border-radius: 1rem;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-self: center;

    @media screen and (max-width:760px){
        padding: 3rem 5rem;
    }
`

export const AboutImage = styled.img`
    width: 100%;
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

    @media screen and (max-width:1100px){
        width: 40%;
    }
    @media screen and (max-width:900px){
        width: 45%;
    }
    @media screen and (max-width:760px){
        width: 55%;
    }
    @media screen and (max-width:500px){
        width: 70%;
    }
    @media screen and (max-width:400px){
        width: 95%;
    }

`
export const AboutChefsHeaderText = styled.p`
    font-size: 3.8rem;
    font-weight: bold;
    line-height: 1.2;

    @media screen and (max-width:1000px){
        font-size: 3.5rem;

    }
    @media screen and (max-width:760px){
        font-size: 3.3rem;

    }
    @media screen and (max-width:500px){
        font-size: 3rem;

    }
    @media screen and (max-width:400px){
        font-size: 2.8rem;

    }
`
export const AboutChefsHeaderSubText = styled.p`
    font-size: 1.5rem;
    margin: 1rem 0;

    @media screen and (max-width:1000px){
        font-size: 1.4rem;

    }
    @media screen and (max-width:760px){
        font-size: 1.3rem;

    }
    @media screen and (max-width:500px){
        font-size: 1.2rem;

    }
    @media screen and (max-width:400px){
        font-size: 1.1rem;

    }
`

export const AboutChefsCardContainer = styled.div`
    flex: 1;
    min-height: 30vh;
    /* background-color: green; */
    display: flex;
    padding: 5rem 20rem;
    flex-wrap: wrap;

    @media screen and (max-width:1400px){
        padding: 5rem 12rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 6rem;
        /* max-height: 120vh; */

    }
    
    @media screen and (max-width:760px){
        padding: 5rem 4rem;
        flex-direction: column;
    }

    @media screen and (max-width:600px){
        padding: 5rem 2rem;

    }
    @media screen and (max-width:400px){
        padding: 3rem 2rem;

    }
`
export const AboutChefsCardRow = styled.div`
    display: flex;
    flex: 1;
    /* background-color: red; */
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width:1000px){
        justify-content: center;
    }
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

    @media screen and (max-width:1000px){
        flex: 0 1 80%;
    }
    @media screen and (max-width:760px){
        flex: 0 1 100%;
    }

    @media screen and (max-width:600px){
        flex-direction: column;
    }
`

export const AboutChefsCardImgContainer = styled.div`
    /* display: flex; */
    flex: 0 1 40%;
    border-radius: 2rem;
    @media screen and (max-width:600px){
        justify-content: center;
        display: flex;
    }
    
    /* background-color: red; */
`
export const AboutChefsImg = styled.img`
    width: 100%;
    @media screen and (max-width:600px){
        width: 60%;
    }
`;

export const AboutChefsCardRight = styled.div`
    display: flex;
    flex:0 1 56% ;
    flex-direction: column;

    @media screen and (max-width:600px){
        align-items: center;
    }
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
