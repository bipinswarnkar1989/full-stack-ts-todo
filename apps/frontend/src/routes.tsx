import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Todos } from '../src/pages/todos';
import { AddTodo } from '../src/pages/add-todo';

export const Routes: React.FC = memo(() => 
      <Switch>
          <Route component={Todos} exact={true} path="/" />
          <Route component={AddTodo} exact={true} path="/add-todo" />
      </Switch>
);