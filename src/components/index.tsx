import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './List/';
import Empty from './Empty';
import Detail from './Detail/';
import Edit from './Edit/';
import Add from './Add/';

function App() {
    return (
      <div className="App">
        <div className="left"> <List /> </div>
        <Switch>
          <Route exact={true} path="/" component={Empty} />
          <Route path="/detail" component={Detail as any} />
          <Route path="/edit" component={Edit as any} />
          <Route path="/add" component={Add as any} />
        </Switch>
      </div>
    );
}

export default App;
