import React from 'react';
import * as Styled from './styles';

type MessageProps = {
    message: string
}

export const Message = ({ message } : MessageProps) => {
    return (
        <Styled.MessageDiv>
    <Styled.MessageInner><Styled.Message>{message}</Styled.Message></Styled.MessageInner>
        </Styled.MessageDiv>
    )
}