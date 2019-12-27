import styled from 'styled-components';

import { CommonTableStyles } from '../types';

export const Tr = styled.tr<CommonTableStyles>`
   background-color: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
   color: ${props => props.color ? props.color : 'black'}
   padding-top: ${props => props.paddingTop ? props.paddingTop : '0'}
   padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : '0'}
   
   :nth-child(even){background-color: #f2f2f2}
`;