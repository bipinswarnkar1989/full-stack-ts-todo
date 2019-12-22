import React from 'react';

import * as Styled from './styles';
import { GetTodosQuery as GetTodosProps } from './todos.gql.generated';

export const Todos: React.FC<GetTodosProps> = ({ todos }) => {
    return (
      <Styled.Container>
        <Styled.Main>
        <Styled.Title color="#3D7E9A">List Todos</Styled.Title>
        <Styled.Todos>
        <ul>
         {todos && todos.map(todo => 
            <li>{todo?.text}</li>
          )}
         </ul>
        </Styled.Todos>
        </Styled.Main>
      </Styled.Container>
    )
}