import React, { Component } from 'react';
import themoviedbApi from '../../services/themoviedb-api';
import { Route, Link } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';

export default class MovieDetailPage extends Component {
  state = { movie: null, error: null };

  componentDidMount() {
    this.fetchMovieDetails();
  }

  fetchMovieDetails = () => {
    const movieId = this.props.match.params.movieId;

    themoviedbApi
      .fetchAPIMovieDetails(movieId)
      .then(movie => this.setState({ movie }))
      .catch(error => {
        this.setState({ error });
      });
  };

  handleBackButton = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }

    history.push(routes.MOVIES);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <>
        <button onClick={this.handleBackButton}>Back to movies</button>
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt="poster"
            />
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(genre => (
                <li>{genre.name}</li>
              ))}
            </ul>
            <h3>Additional information</h3>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  id: movie.id,
                  from: this.props.location.state.from,
                },
              }}
            >
              Cast
            </Link>
            <p></p>
            <Link
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  id: movie.id,
                  from: this.props.location.state.from,
                },
              }}
            >
              Reviews
            </Link>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </div>
        )}
      </>
    );
  }
}
