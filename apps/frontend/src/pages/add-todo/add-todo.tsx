import React, { useState, useCallback } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import * as Styled from './styles';
import { AddTodo as AddTodoComponent } from './components/add-todo/addTodo';
import { Todo, useAddTodoMutation } from './todo.gql.generated';
import { GetTodosDocument } from '../../pages/todos/todos.gql.generated';
import { Message } from '../../components/message';

export const initialTodoTodel = {text: ''};

export type TodoProps = Pick<Todo, 'text'>;


export const AddTodo:React.FC = () => {
    const [newTodo, setNewTodo] = useState<TodoProps>(initialTodoTodel);
    const [message, setMessage] = useState<string>('');

    const client = useApolloClient();
    const [addTodoMutation] = useAddTodoMutation();

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
       const text = event.target.value;
       const newTd = {
           ...newTodo,
           text
       };
       setNewTodo(newTd);
    }, [newTodo]);

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
       const text = newTodo.text;
       const { data } = await addTodoMutation({ variables: { text }});
       if (data && data.addTodo && data.addTodo.id) {
        setMessage('Todo Added Successfully.');
        setNewTodo(initialTodoTodel);
        setTimeout(() => {
            setMessage('');
        }, 2000);
       }
    }, [newTodo, addTodoMutation, client, message]);

    return (
       <Styled.Container>
          <AddTodoComponent 
           todo={newTodo}
           handleChange={handleChange}
           handleSubmit={handleSubmit}
          />
          {message && 
        <Message message={message} />
          }
       </Styled.Container>
    )
}