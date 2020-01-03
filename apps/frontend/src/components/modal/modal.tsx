import React from 'react';
import * as Styled from './styles';

type modalProps = {
    title: string
    children: React.ReactNode
    show: boolean
}

export const Modal: React.FC<modalProps> = ({ title, children, show }) => {
    if (!show) {
        return null;
    }
    return (
       <Styled.Wrapper>
           <Styled.Content>
              <Styled.Title>
               {title}
               </Styled.Title>
               <Styled.ModalBody>
               {children}
               </Styled.ModalBody>
           </Styled.Content>
           <Styled.Background />
       </Styled.Wrapper>
    )
}