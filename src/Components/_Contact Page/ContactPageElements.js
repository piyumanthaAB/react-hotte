import styled from "styled-components";

export const ContactFormHeader = styled.div`
    width: 45%;
    text-align: center;
`

export const ContactFormContainer = styled.div`
    width: 100%;
    padding: 5rem  20rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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
`
export const ContactFormGroup = styled.div`
 /* background-color   :green ; */
    flex: 0 1 49%;
    margin: 2rem 0;
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