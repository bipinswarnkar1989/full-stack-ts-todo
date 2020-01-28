import React, { useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import * as Styled from './styles';
import { GetTodosQuery as GetTodosProps, useDeleteTodoMutation, Todo, GetTodosDocument, useEditTodoMutation } from './todos.gql.generated';
import { Table, Thead, TBody, Tr, Td } from '../../components/table';
import { Modal } from '../../components/modal';
import { DeleteTodo, EditTodo } from './components';
import { AddButton } from '../add-todo/components/add-button';
import { Message } from '../../components/message';

type TodoProps =  Todo;

export const initialTodoTodel = {id: '', text: '', isComplete: false};

export const Todos: React.FC<GetTodosProps> = ({ todos }) => {
    const [todoToDelete, setTodoToDelete] = useState<TodoProps>(initialTodoTodel);
    const [message, setmessage] = useState<string>('');
    const [todoToEdit, setTodoToEdit] = useState<TodoProps>(initialTodoTodel);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('');

    const client = useApolloClient();

    const [deleteTodoMutation] = useDeleteTodoMutation();
    const [editTodoMutation] = useEditTodoMutation();

    const handleDeleteClick = (t: TodoProps ) => {
      setModalTitle('Delete Todo');
      setTodoToDelete(t);
      setShowModal(t.id && t.id !== '' ? true : false);
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
         setShowModal(false);
         setmessage('Todo Deleted Successfully');
         setTimeout(()=> {
          setmessage('');
         }, 8000);
       }
    }

    const handleEditClick = (t: TodoProps ) => {
      setModalTitle('Edit Todo');
      setTodoToEdit(t);
      setShowModal(t.id && t.id !== '' ? true : false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let text = event.target.value;
      let newTd = {
        ...todoToEdit,
        text
      }
      setTodoToEdit(newTd);
    }

    const handleEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       let id = todoToEdit.id;
       let text = todoToEdit.text;
       const { data } =   await editTodoMutation({ variables: { id, text } });
       const { todos } =  await client.readQuery<any>({ query: GetTodosDocument });
       console.log(data)
       if (data && data.updateTodoText && data.updateTodoText.id && todos) {
        client.writeQuery({
          query: GetTodosDocument,
          data: {
             todos: todos.map((t:any) => {
               if (t.id === data.updateTodoText?.id) {
                  return data.updateTodoText;
               }
               return t;
             })
          }
         });
         setTodoToEdit(initialTodoTodel);
         setShowModal(false);
         setmessage('Todo Updated Successfully');
         setTimeout(()=> {
          setmessage('');
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
              <Td><Styled.NavLink to={`/view-todo/${todo.id}`} >{todo.text}</Styled.NavLink></Td>
              <Td><Styled.EditIcon onClick={() => handleEditClick(todo)} /></Td>
              <Td><Styled.DeleteIcon onClick={() => handleDeleteClick(todo)} /></Td>
            </Tr>
            )
          )}
          </TBody>
         </Table>
        </Styled.Todos>
        </Styled.Main>
        <Modal
         title={modalTitle}
         show={showModal}
         handleCloseClick={() => handleDeleteClick(initialTodoTodel)}
        >
          {todoToDelete && todoToDelete.id !== '' ? 
          <DeleteTodo
           handleCancelClick={() => handleDeleteClick(initialTodoTodel)}
           handleConfirmDelete={handleConfirmDelete}
           delMessage={message}
           />  :
           todoToEdit && todoToEdit.id !== '' ? 
           <EditTodo
           todo={todoToEdit}
           handleChange={e => handleChange(e)}
           handleSubmit={e => handleEditSubmit(e)}
           />  : '' }
        </Modal>
        {message && 
        <Message message={message} />
       }
       <AddButton />
      </Styled.Container>
    )
}