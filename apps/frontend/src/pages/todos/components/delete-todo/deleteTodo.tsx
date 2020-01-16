import React from 'react';
import * as Styled from './styles';

type DeleteTodoProps = {
    handleCancelClick: (event: React.MouseEvent<HTMLElement>) => void
    handleConfirmDelete: (event: React.MouseEvent<HTMLElement>) => void
    delMessage: string
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ handleCancelClick, handleConfirmDelete, delMessage }) => {
    return (
        <Styled.Container>
        <Styled.TitleContainer>
        <Styled.Title>Are you sure want to delete ?</Styled.Title>
        </Styled.TitleContainer>
        <Styled.Actions>
           <Styled.Cancel  onClick={handleCancelClick}>
               <Styled.CancelIcon/> Back
           </Styled.Cancel>
           <Styled.Confirm onClick={handleConfirmDelete}>
               <Styled.ConfirmIcon/> Confirm
           </Styled.Confirm>
        </Styled.Actions>
    </Styled.Container> 
    )
};