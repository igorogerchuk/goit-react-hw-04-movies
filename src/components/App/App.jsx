import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Homepage from '../../pages/Homepage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailPage from '../../pages/MovieDetailsPage';
import routes from '../../routes';
// import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path={routes.HOMEPAGE} component={Homepage} />
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />

        <Redirect to={routes.HOMEPAGE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
