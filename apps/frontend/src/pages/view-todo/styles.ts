import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
  display: flex;
  width: 90%;
  background-color: white;
  padding: 10px;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const TextDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
`;

export const Header = styled.div`
   font-size: 12px;
   display: flex;
   width: 100%;
   background-color: #EFF0F1;
   flex-direction: column;
   justify-content: center;
   padding: 4px;
`;

export const Main = styled.div`
   font-size: 18px;
   display: flex;
   width: 100%;
   padding: 10px;
`;

export const StatusDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;