import React from 'react';
import { useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Todo, useTodoQueryQuery } from './todo.gql.generated';

import {
    Container,
    Card,
    TextDiv,
    StatusDiv,
    Main,
    Header
} from './styles';

interface RouteParams{
    id: string
}


export const ViewTodo = () => {
    const { id } = useParams<RouteParams>();
    const client = useApolloClient();
    const { data, error, loading} = useTodoQueryQuery({  variables: { id } });

    return (
        <Container>
         <Card>
         {data && data.todo &&
             <React.Fragment>
             <TextDiv>
                 <Header>
                     Todo text
                 </Header>
                 <Main>
                 {data.todo.text}
                 </Main>
             </TextDiv>
             <StatusDiv>
             <Header>
              Status
             </Header>
                 <Main>
                 {data.todo.isComplete ? 'Completed' : 'Backlog'}
                 </Main>
             </StatusDiv>
             </React.Fragment>
         }
         </Card>
        </Container>
    )
}