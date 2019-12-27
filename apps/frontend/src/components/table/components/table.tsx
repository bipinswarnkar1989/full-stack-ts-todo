import styled, { css } from 'styled-components';

import { CommonTableStyles } from '../types';

export const baseStyle = css<CommonTableStyles>`
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
    color: #202020;
    font-family: 'Poppins', sans-serif;
    margin-top: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'left'};
    padding: 10px;
    max-width: 100%;
`;

export const Table = styled.table`
   border-collapse: collapse;
   width: 99%;
   ${baseStyle}
`;