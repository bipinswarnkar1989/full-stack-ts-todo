import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Todos } from '../src/pages/todos';

export const Routes: React.FC = memo(() => 
   <Router>
      <Switch>
          <Route component={Todos} exact={true} path="/" />
      </Switch>
   </Router>
);