import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    height: 100%;
    background-color: green;
`
export const FormInput = styled.input`
    width: 100%;
    padding: 1rem;
    border: 1px solid #ced4da;
    color: #696969;
    border-radius: .3rem;
    transition: all .3s;
    font-family: "Poppins", sans-serif;


    &:focus{
        outline:none ;
        border: 1px solid #fc802a;
    }
    
`

export const FormTextArea = styled.textarea`
    margin: 1rem 0;
    width: 100%;
    padding: 1rem;
    border: 1px solid #ced4da;
    color: #696969;
    border-radius: .3rem;
    transition: all .3s;
    font-family: "Poppins", sans-serif;
    &:focus{
        outline:none ;
        border: 1px solid #fc802a;
    }
`

export const FormSubmitBtn = styled.button`
    background-image: linear-gradient(to right,#f65f26, #d41c18);
    color: white;
    border: 1px solid transparent;
    font-family: "Poppins", sans-serif;
    padding: 1rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s;
    position: relative;
    background-color: none;
    z-index: 1;

    


    
    &:hover{
        color: #ff702a;
        border: 1px solid #ff702a;
        background-image: linear-gradient(to right,white, white);
    }
`