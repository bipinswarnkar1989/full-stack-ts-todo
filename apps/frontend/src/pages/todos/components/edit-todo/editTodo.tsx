import React from 'react';
import { Todo } from '../../todos.gql.generated';
import {
    Container,
    Form,
    Input,
    Button
} from './styles';

type EditTodoProps = {
    todo: Todo,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const EditTodo: React.FC<EditTodoProps> = ({ todo, handleChange, handleSubmit }) => {
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
