import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import useSwrTime from '../hooks/use-swr-time';
import Delayed from './Delayed';
import SwrTime from './SwrTime';

function App() {
  const { data: time } = useSwrTime();

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/swr">SWR Time</Link>
          </li>
        </ul>
      </nav>

      <hr />
        Global: <br />
        Time with SWR: {time} (App)
      <hr />

      <Switch>
        <Route path="/swr">
          <Delayed><SwrTime /></Delayed>
        </Route>
        <Route path="/">
          ^^^ Choose route ^^^
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
