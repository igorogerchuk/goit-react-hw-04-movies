import React, { Component } from 'react';
import themoviedbApi from '../../services/themoviedb-api';

export default class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    this.fetchMovieReviews();
  }

  fetchMovieReviews = () => {
    const movieId = this.props.location.state.id;
    themoviedbApi
      .fetchAPIMovieReviews(movieId)
      .then(reviews => this.setState({ reviews }));
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length === 0 && (
          <p>We don`t have any reviews for this movie.</p>
        )}
        {reviews.length !== 0 && (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
