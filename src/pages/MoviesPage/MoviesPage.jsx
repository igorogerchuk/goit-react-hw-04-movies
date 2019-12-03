import React, { Component } from 'react';
import Searchbar from '../../components/SearchBar';
import themoviedbApi from '../../services/themoviedb-api';
import { Link } from 'react-router-dom';

export default class MoviesPage extends Component {
  state = {
    movies: [],
  };

  searchParamsQuery = props => {
    return new URLSearchParams(props.location.search).get('query');
  };

  componentDidMount() {
    const query = this.searchParamsQuery(this.props);

    if (!query) {
      return;
    }

    this.fetchMovies(query);
  }

  fetchMovies = query => {
    return themoviedbApi
      .fetchAPIMovies(query)
      .then(movies => this.setState({ movies }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = this.searchParamsQuery(prevProps);
    const query = this.searchParamsQuery(this.props);

    if (prevQuery !== query) {
      this.fetchMovies(query);
    }
  }

  onSearch = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { match } = this.props;
    const { movies } = this.state;
    return (
      <div>
        <Searchbar onSearch={this.onSearch} />

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${match.url}/${movie.id}`,
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
          ))}
        </ul>
      </div>
    );
  }
}
