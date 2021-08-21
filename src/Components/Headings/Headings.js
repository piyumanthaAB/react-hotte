import styled from "styled-components";

export const CustomHeading = styled.p`
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "300"};
    color: ${props => props.color || "black"};
    letter-spacing: ${props => props.space || "initial"};
    padding:${props => props.padding || "initial"} ;
    margin:${props => props.margin || "initial"} ;
    line-height:${props => props.lineHeight || "initial"} ;

`

export const CustomSpan = styled.span`
    font-size: ${props => props.size || "1rem"};
    font-weight: ${props => props.weight || "300"};
    color: ${props => props.color || "black"};
    letter-spacing: ${props => props.space || "initial"};
    border-bottom: ${props => props.bottomBorder || "initial"};
`
export const ColorSpan = styled.span`
    color:#ff702a;
`