import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from './containers/Main';
import PageNotFound from './containers/PageNotFound';
import Loader from './components/Loader';
import type { TStore } from './redux/types';

import './App.scss';

function App() {
  const { isLoading } = useSelector((state: TStore) => state.loader);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/page-not-found">
            <PageNotFound />
          </Route>
          <Redirect to="/page-not-found" />
        </Switch>
      </Router>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
