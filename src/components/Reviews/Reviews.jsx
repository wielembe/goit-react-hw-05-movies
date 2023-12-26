import { getMovieReviews } from 'Api/ApiRequests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

const Reviews = () => {
  const { id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  const fetchMovieCredits = async id => {
    try {
      const movies = await getMovieReviews(id);
      setMovieReviews(movies.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMovieCredits(id);
  }, [id]);

  return (
    <div>
      <ul>
        {movieReviews.length === 0 ? (
          <div>We don't have any reviews for this movie.</div>
        ) : (
          movieReviews.map(review => (
            <li key={review.id}>
              <strong>Author: {review.author}</strong>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Reviews;

Reviews.propTypes = {
  movieReviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      author: propTypes.string.isRequired,
      content: propTypes.number.isRequired,
    })
  ),
};
