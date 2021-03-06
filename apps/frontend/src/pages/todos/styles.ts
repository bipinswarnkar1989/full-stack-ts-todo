import styled from 'styled-components';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Container = styled.section`
   color: ${props => props.theme.color};
   background-color: white;
   margin: 2px;
   display: flex;
   width: 100%;
`;

export const Main = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   justify-content: center;
   -webkit-box-pack: center;
   -moz-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;

   align-items: center;
   -webkit-box-align: center;
   -moz-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center
`;

export const Title = styled('h2')<{color: string}>`
   color: ${props => props.color}
`;

export const Todos = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 10px;
`;

export const EditIcon = styled(FaEdit)`
   cursor: pointer;
   color: #008080;
`;

export const DeleteIcon = styled(FaTrash)`
   cursor: pointer;
   color: #AA2B2B;
`;

export const NavLink = styled(Link)`
   text-decoration: none;
   color: #0366D6;

   :hover{
      color: #FF6600;
   }
`;

