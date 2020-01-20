import styled from 'styled-components';

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgb(0, 0, 0, 0.4);
   overflow: auto;
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: auto;
  min-width: 50%;
  max-width: 20%;
  z-index: 10;
  background: white;
  padding: 1px;  
  
  
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

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: green;
`;

export const HeaderLeft = styled.div`
   text-align: left;
   width: 100%;
   padding-left: 10px;
`;

export const HeaderRight = styled.div`
   width: 100%;
   text-align: right;
   padding-right: 10px;
`;

export const Title = styled.span`
   color: white;
   padding: 2px;
   width: 100%;
   text-align: left;
   display: block;
`;

export const Close = styled.span`
   cursor: pointer;
   color: white;
`;

export const ModalBody = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   align-items: center;
`;