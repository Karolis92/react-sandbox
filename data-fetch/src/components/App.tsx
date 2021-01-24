import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import useQueryTime from '../hooks/use-query-time';
import useSwrTime from '../hooks/use-swr-time';
import Delayed from './Delayed';
import QueryTime from './QueryTime';
import SwrTime from './SwrTime';

function App() {
  const { data: timeFromSwr } = useSwrTime();
  const { data: timeFromQuery } = useQueryTime();

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
          <li>
            <Link to="/query">Query Time</Link>
          </li>
        </ul>
      </nav>

      <hr />
        Global time: <br />
        SWR: {timeFromSwr} <br />
        Query: {timeFromQuery}
      <hr />

      <Switch>
        <Route path="/swr">
          <Delayed><SwrTime /></Delayed>
        </Route>
        <Route path="/query">
          <Delayed><QueryTime /></Delayed>
        </Route>
        <Route path="/">
          ^^^ Choose route ^^^
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
