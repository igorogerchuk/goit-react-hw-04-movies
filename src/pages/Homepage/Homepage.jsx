import React, { Component } from 'react';
import themoviedbApi from '../../services/themoviedb-api';
import { Link } from 'react-router-dom';

export default class Homepage extends Component {
  state = { topMovies: '', movies: [], error: null };

  componentDidMount() {
    this.fetchTopMovies();
  }

  fetchTopMovies = () => {
    themoviedbApi
      .fetchAPITopMovies()
      .then(movies => {
        this.setState({ movies });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="poster"
                  />
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
