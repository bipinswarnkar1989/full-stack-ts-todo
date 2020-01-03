import React, { useState } from 'react';

import * as Styled from './styles';
import { GetTodosQuery as GetTodosProps, Todo } from './todos.gql.generated';
import { Table, Thead, TBody, Tr, Td } from '../../components/table';
import { Modal } from '../../components/modal';
import { DeleteTodo } from './components';

type TodoProps  = Todo | {};

export const Todos: React.FC<GetTodosProps> = ({ todos }) => {
    const [todoToDelete, setTodoToDelete] = useState<TodoProps>();

    const handleClick = (t: TodoProps ) => {
      setTodoToDelete(t);
    }
  
    return (
      <Styled.Container>
        <Styled.Main>
        <Styled.Title color="#3D7E9A">List Todos</Styled.Title>{JSON.stringify(todoToDelete)}
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
              <Td><Styled.DeleteIcon onClick={() => handleClick(todo)} /></Td>
            </Tr>
            )
          )}
          </TBody>
         </Table>
        </Styled.Todos>
        </Styled.Main>
        <Modal
         title='Delete Todo'
         show={todoToDelete ? true : false}
        >
          <DeleteTodo />
        </Modal>
      </Styled.Container>
    )
}