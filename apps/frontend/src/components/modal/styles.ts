import styled from 'styled-components';

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(0, 0, 0, 0.4);
   overflow: auto;
        ::-webkit-scrollbar {
            width: 0px !important;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
        /* Optional: show position indicator in red */
        ::-webkit-scrollbar-thumb {
            background: #FF0000;
}
`;

export const Content = styled.div`
  position: relative;
  width: 80%;
  z-index: 10;
  background: white;
  padding: 1px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  top: 10%;
`;

export const Background = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background: black;
   opacity: 0.5;
`;

export const Title = styled.span`
   color: white;
   padding: 2px;
   background-color: green;
   width: 100%;
   text-align: left;
   display: block;
`;

export const ModalBody = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
`;