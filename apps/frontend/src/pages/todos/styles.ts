import styled from 'styled-components';

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

export const Title = styled.h2`
   
`;