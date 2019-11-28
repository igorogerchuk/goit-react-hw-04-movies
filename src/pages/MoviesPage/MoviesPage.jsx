import React, { Component } from 'react';
import Searchbar from '../../components/SearchBar';

export default class MoviesPage extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  fetchMovies() {}

  onSearch = query => {
    this.setState({ query });
  };
  render() {
    return (
      <div>
        <Searchbar onSearch={this.onSearch} />
      </div>
    );
  }
}
