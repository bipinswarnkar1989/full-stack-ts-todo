import styled from 'styled-components';
import { FaArrowAltCircleLeft, FaCheckCircle } from 'react-icons/fa';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   padding: 4px;
   width:100%;
`;

export const Title = styled.h4`
   font-color: green;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Actions = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   justify-content: space-between;
`;

export const Cancel = styled(FaArrowAltCircleLeft)`
   cursor: pointer;
`;

export const Confirm = styled(FaCheckCircle)`
   cursor: pointer;
`;