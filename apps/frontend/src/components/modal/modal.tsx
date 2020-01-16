import React from 'react';
import * as Styled from './styles';

type modalProps = {
    title: string
    children: React.ReactNode
    show: boolean
    handleCloseClick: (event: React.MouseEvent<HTMLElement>) => void
    
}

export const Modal: React.FC<modalProps> = ({ title, children, show, handleCloseClick }) => {
    if (!show) {
        return null;
    }
    return (
       <Styled.Wrapper>
           <Styled.Content>
             <Styled.Header>
             <Styled.HeaderLeft>
             <Styled.Title>
               {title}
               </Styled.Title>
                 </Styled.HeaderLeft>
                 <Styled.HeaderRight>
                     <Styled.Close onClick={handleCloseClick}>X</Styled.Close>
                 </Styled.HeaderRight>
             </Styled.Header>
              
               <Styled.ModalBody>
               {children}
               </Styled.ModalBody>
           </Styled.Content>
           <Styled.Background />
       </Styled.Wrapper>
    )
}