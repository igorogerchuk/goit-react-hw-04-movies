import React, { Component } from 'react';
import themoviedbApi from '../../services/themoviedb-api';

export default class Cast extends Component {
  state = { cast: [], error: null };

  componentDidMount() {
    this.fetchMovieCast();
  }

  fetchMovieCast() {
    const movieId = this.props.location.state.id;
    themoviedbApi
      .fetchAPIMovieCast(movieId)
      .then(movie => this.setState({ cast: movie.cast }))
      .catch(error => this.setState({ error }));
  }
  render() {
    const { cast } = this.state;
    return (
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt="profile"
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
