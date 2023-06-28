import styled from "styled-components"
import { isYellow } from "./User";

// export const Paragraf = styled.p`
// margin: 0;
// margin-bottom: 10px;
// font-weight: 500;
// color: red;
// `;

// export const Span = styled.span`
// color: aqua;
// ${Paragraf}:hover & {
//     background-color: green;
// }
// `;



export const Span = styled.span`
background-color: ${({isYellow}) => isYellow ? 'yellow' : 'green'};
color: ${props => props.isYellow ? 'white' : 'aqua'}
`;

export const Paragraf = styled.p`
margin: 0;
margin-bottom: 10px;
font-weight: 500;
color: red;
&: hover ${Span} {
    background-color: green;
}
`;

