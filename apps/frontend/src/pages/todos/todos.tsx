import React from 'react';

import * as Styled from './styles';
import { GetTodosQuery as GetTodosProps } from './todos.gql.generated';
import { Table, Thead, TBody, Tr, Td } from '../../components/table';

export const Todos: React.FC<GetTodosProps> = ({ todos }) => {
    return (
      <Styled.Container>
        <Styled.Main>
        <Styled.Title color="#3D7E9A">List Todos</Styled.Title>
        <Styled.Todos>
        <Table>
          <Thead>
            <Tr 
            backgroundColor="cornflowerblue"
            color="white"
            paddingBottom="12px"
            paddingTop="12px"
            >
              <Td>Todo</Td>
              <Td>Edit</Td>
              <Td>Delete</Td>
            </Tr>
          </Thead>
          <TBody>
          {todos && todos.map(todo => 
             todo && todo.id && ( 
             <Tr key={todo.id}>
              <Td>{todo.text}</Td>
              <Td>Edit</Td>
              <Td>Delete</Td>
            </Tr>
            )
          )}
          </TBody>
         </Table>
        </Styled.Todos>
        </Styled.Main>
      </Styled.Container>
    )
}