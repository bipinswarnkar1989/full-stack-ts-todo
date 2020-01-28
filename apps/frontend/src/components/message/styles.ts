import styled from 'styled-components';

export const MessageDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: green;
    
`;

export const MessageInner = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const Message = styled.span`
  display: block;
  color: white;
  font-size: 14px;
`;