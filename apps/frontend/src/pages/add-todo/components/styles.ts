import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';

export const Container = styled.div`
   position: fixed;
   width: 56px;
   height: 56px;
   bottom: 16px;
   right: 16px;
`;

export const Link = styled.button`
   width: 100%;
   height: 100%;
   cursor: pointer; 
   background-color: #1A76D2;
   color: white;
   font-size: 0.875rem;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 500;
   border-radius: 50%;
   -moz-border-radius: 50%;
   padding: 2px;
   box-sizing: border-box;
   line-height: 1.75;
   text-transform: uppercase;
   box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
`;

export const AddIcon = styled(FaPlus)``;