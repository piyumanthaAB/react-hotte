import { FaRegHospital } from "react-icons/fa";
import styled from "styled-components";

export const CustomHeading = styled.p`
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "300"};
    color: ${props => props.color || "black"};
    letter-spacing: ${props=>props.space || "initial"};
`

export const CustomSpan = styled.span`
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "300"};
    color: ${props => props.color || "black"};
    letter-spacing: ${props=>props.space || "initial"};
`
