import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}
