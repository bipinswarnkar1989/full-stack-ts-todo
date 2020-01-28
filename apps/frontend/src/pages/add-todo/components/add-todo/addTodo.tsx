import React from 'react';
import { TodoProps } from '../../add-todo';
import {
    Container,
    Form,
    Input,
    Button
} from './styles';

type AddTodoProps = {
    todo: TodoProps,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({ todo, handleChange, handleSubmit }) => {
    const { text } = todo;
    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input value={text} onChange={handleChange} placeholder="Enter todo text" name="text" />
            <Button type="submit" color="white" backgroundColor="#1b95e0">Submit</Button>
          </Form>
        </Container>
    )
}
