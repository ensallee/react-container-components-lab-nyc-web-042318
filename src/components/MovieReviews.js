import React from 'react';

const MovieReviews = ({reviews}) => {
  console.log('Movie Reviews props', reviews)

  let reviewList = reviews.map((review) => {
    return <div className="review">
      <h1>Title: {review.display_title}</h1>
      <h3>By: {review.byline}</h3>
      <p>{review.headline}</p>
    </div>
  })

  return (
    <div className='review-list'>
      <ul>
      {reviewList}
      </ul>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
