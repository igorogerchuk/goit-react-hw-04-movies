import React, { Component } from 'react';
import fetchAPITopMovies from '../../services/themoviedb-api';

export default class Homepage extends Component {
  state = { topMovies: '' };

  componentDidMount() {
    this.fetchTopMovies();
  }

  fetchTopMovies = () => {};
  render() {
    return <h1>Top Movies</h1>;
  }
}
