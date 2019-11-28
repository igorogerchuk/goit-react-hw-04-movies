import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import MoviesPage from '../../pages/MoviesPage';

import routes from '../../routes';

import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.HOMEPAGE} exact component={MoviesPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />
        <Redirect to={routes.HOMEPAGE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
