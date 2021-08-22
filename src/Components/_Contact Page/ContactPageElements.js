import styled from "styled-components";

export const ContactFormHeader = styled.div`
    width: 45%;
    text-align: center;

    @media screen and (max-width:1000px){
        width: 55%;

    }
    @media screen and (max-width:760px){
        width: 65%;

    }
    @media screen and (max-width:600px){
        width: 75%;

    }
    @media screen and (max-width:500px){
        width: 95%;

    }
`

export const ContactFormContainer = styled.div`
    width: 100%;
    padding: 5rem  20rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width:1400px){
        padding: 5rem 10rem;
    }
   
    /* styled for screen size 1200px or less */
    @media screen and (max-width:1200px){
        padding: 5rem 5rem;
        /* max-height: 120vh; */

    }
    @media screen and (max-width:1100px){
        padding: 5rem 0rem;
        /* max-height: 120vh; */

    }
    
`
export const ContactForm = styled.form`
    width: 65%;
    min-height: 20vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 3rem;
    background-color: #feeee7;
    border-radius: 1rem;
    /* background-color: red; */
    @media screen and (max-width:800px){
        width: 80%;
    }

    @media screen and (max-width:500px){
        padding: 2rem 1.5rem;
        width: 90%;


    }
    
    
`


export const ContactFormGroup = styled.div`
 /* background-color   :green ; */
    flex: 0 1 49%;
    margin: 2rem 0;

    @media screen and (max-width:600px){
        flex: 0 1 100%;

    }

    
`
export const ContactFormGroupTextarea = styled.div`
 /* background-color   :green ; */
    flex: 0 1 100%;
    margin: 2rem 0;
`

export const ContactFormTop = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 0 3rem;
`
export const ContactFormBottom = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ContactFormTitle = styled.p`
    font-size: 3.4rem;
    font-weight: 700;
    color: #0a0626;
    line-height: 1.2;
    margin: 1rem 0;

    @media screen and (max-width:760px){
        font-size: 3rem;
    }
    @media screen and (max-width:600px){
        font-size: 2.8rem;
    }
    @media screen and (max-width:500px){
        font-size: 2.5rem;
    }
`

export const ContactFormTitleDesc = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: #494442;
    line-height: 1.2;
    margin: 2rem 0 2rem;

    @media screen and (max-width:760px){
        font-size: 1.2rem;
    }
    @media screen and (max-width:760px){
        font-size: 1.1rem;
    }
`