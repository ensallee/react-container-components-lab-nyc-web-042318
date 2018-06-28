// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json/query=comedy?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      reviews: [],
      searchTerm: 'comedy'
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(resp=> resp.json())
    .then((reviews) => this.setState({reviews: reviews.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        return <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
