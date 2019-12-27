import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
              <Td></Td>
              <Td></Td>
            </Tr>
          </Thead>
          <TBody>
          {todos && todos.map(todo => 
             todo && todo.id && ( 
             <Tr key={todo.id}>
              <Td>{todo.text}</Td>
              <Td><Styled.EditIcon /></Td>
              <Td><Styled.DeleteIcon /></Td>
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