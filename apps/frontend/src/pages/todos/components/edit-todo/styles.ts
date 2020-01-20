import styled from 'styled-components';
import { commonStyles } from '../../../types';

export const Container = styled.section`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 2px;
`;

export const Form = styled.form`
   display: flex;
   padding: 2px;
   flex-direction: column;
   width:99%;
   justify-content: center;
`;

export const Input = styled.input`
   padding: 4px;
   padding: 10px;
   border: 1px solid #ccc;
   margin: 10px;
   font-size: 15px;
   border-radius: 5px;
`;

export const Button = styled.button<commonStyles>`
   padding: 4px;
   color:${props => props.color ? props.color : 'white'};
   background-color:${props => props.backgroundColor ? props.backgroundColor : 'blue'};
   border-radius: 5px;
   padding: 10px;
   cursor: pointer;
`;
