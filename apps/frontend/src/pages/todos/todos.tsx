import React, { useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import * as Styled from './styles';
import { GetTodosQuery as GetTodosProps, useDeleteTodoMutation, Todo, GetTodosDocument } from './todos.gql.generated';
import { Table, Thead, TBody, Tr, Td } from '../../components/table';
import { Modal } from '../../components/modal';
import { DeleteTodo } from './components';

type TodoProps =  Todo;

const initialTodoTodel = {id: '', text: '', isComplete: false};

export const Todos: React.FC<GetTodosProps> = ({ todos }) => {
    const [todoToDelete, setTodoToDelete] = useState<TodoProps>(initialTodoTodel);
    const [delMessage, setDelMessage] = useState<string>('');
    const client = useApolloClient();

    const [deleteTodoMutation] = useDeleteTodoMutation();

    // const { deleteTodo } = useDeleteTodoMutation({
    //   variables: { id: String(id) }
    // });

    const handleClick = (t: TodoProps ) => {
      setTodoToDelete(t);
    }

    const handleConfirmDelete = async () => {
       let id= todoToDelete.id;
       const { data } =   await deleteTodoMutation({ variables: { id } });
       const { todos } =  await client.readQuery<any>({ query: GetTodosDocument });
       if (data && data.deleteTodo && data.deleteTodo.id && todos) {
        client.writeQuery({
          query: GetTodosDocument,
          data: {
             todos: todos.filter((t:any) => t.id !== data.deleteTodo?.id)
          }
         });
         setTodoToDelete(initialTodoTodel);
         setDelMessage('Todo Deleted Successfully');
         setTimeout(()=> {
          setDelMessage('');
         }, 8000);
       }
    }

    if (!todos) {
      return null
    }
  
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
             todo && ( 
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
         show={todoToDelete && todoToDelete.id !== '' ? true : false}
         handleCloseClick={() => setTodoToDelete(initialTodoTodel)}
        >
          <DeleteTodo
           handleCancelClick={() => setTodoToDelete(initialTodoTodel)}
           handleConfirmDelete={handleConfirmDelete}
           delMessage={delMessage}
           />
        </Modal>
        {delMessage && 
        <Styled.MessageDiv>
    <Styled.MessageInner><Styled.Message>{delMessage}</Styled.Message></Styled.MessageInner>
        </Styled.MessageDiv>
       }
      </Styled.Container>
    )
}