import styled from "styled-components";

import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
    min-width: 10rem;
    padding: .8rem 2.2rem;
    border-radius: 50rem;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    background-image: linear-gradient(to right,#fb6828, #cc0e15);
    backface-visibility: hidden;

    transition: all .2s;

    &:hover{
        background-image:linear-gradient(to right,transparent, transparent) ;
        border: 2px solid #fb6828;
        color: #fb6828;
    }
`