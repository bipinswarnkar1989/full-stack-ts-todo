import React from 'react';

import { Todos } from './todos'
import { useGetTodosQuery } from './todos.gql.generated';

export const TodosContainer: React.FC = () => {
   const { data, error, loading } = useGetTodosQuery();
   if (error) {
       return <span>Something went wrong</span>
   }
   if (loading) {
       return <span>Loading...</span>
   }
   if (!data || !data.todos) {
       return <span>No data.</span>
   }
   return (
    <Todos todos={data.todos} />
   )
}
