import styled from "styled-components";

export const ContactFormContainer = styled.div`
    display: flex;
    min-height: 50vh;
    background-color: white;
    /* flex: 1; */
    flex-direction: column;
    padding: 3rem 0;
    align-items:center ;
`
export const ContactFormMessage = styled.div`
    display: flex;
    max-width: 35%;
    min-height: 10vh;
    align-self: center;
    text-align: center;
    flex-direction: column;
`

export const ContactForm = styled.form`
    display: flex;
    min-height: 60vh;
    background-color: #feeee7;
    min-width: 40%;
    justify-content: space-between;
    padding: 2rem;
    border-radius: 1rem;
    margin: 2rem 0;

    &:last-child{
        background-color: red;
    }
    
`


