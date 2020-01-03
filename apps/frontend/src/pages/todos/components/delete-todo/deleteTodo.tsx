import React from 'react';
import * as Styled from './styles';

export const DeleteTodo: React.FC = () => (
    <Styled.Container>
        <Styled.TitleContainer>
        <Styled.Title>Are you sure want to delete</Styled.Title>
        </Styled.TitleContainer>
        <Styled.Actions>
           <Styled.Cancel/>
           <Styled.Confirm/>
        </Styled.Actions>
    </Styled.Container>  
);