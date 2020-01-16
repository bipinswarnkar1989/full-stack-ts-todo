import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 4px;
   width:50%;
`;

export const Title = styled.h4`
   font-color: green;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const Actions = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   justify-content: space-around;
`;
export const Button = styled.div`
    border: none;
    background-color: white;
    border: 1px solid #4CAF50;
    padding: 5px 25px;
    transition-duration: 0.4s;
    webkit-transition: 0.4s;
    color: #4CAF50;
    cursor: pointer;
    display: flex;
    text-align: center;
    
    vertical-align: middle;

    :hover {
       background-color: #4CAF50;
       color: white;
    }
`;

export const CancelIcon = styled(FaArrowAltCircleLeft)`
   padding:2px;
`;

export const ConfirmIcon = styled(FaCheckCircle)`
   padding:2px;
`;
export const Cancel = styled(Button)`
   
`;

export const Confirm = styled(Button)`
   
`;

