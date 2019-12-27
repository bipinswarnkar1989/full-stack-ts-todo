import styled, { css } from 'styled-components';

const baseInputStyles = css`
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
  padding: 0.5em;
`;

export const DefaultInput = styled.input`
  ${baseInputStyles}
`;

export const SecondComponent = styled.button`
  ${baseInputStyles}
    /* make changes as needed*/
`;