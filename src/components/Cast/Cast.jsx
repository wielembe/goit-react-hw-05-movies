import { getMovieCredits } from 'Api/ApiRequests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import propTypes from 'prop-types';

const Cast = () => {
  const { id } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  const fetchMovieCredits = async id => {
    try {
      const movies = await getMovieCredits(id);
      setMovieCast(movies.data.cast);
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
        {movieCast.length !== 0 &&
          movieCast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img
                  className={css.actorPhoto}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div>No photo provided</div>
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Cast;

Cast.propTypes = {
  movieCast: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      profile_path: propTypes.string,
      name: propTypes.string.isRequired,
      character: propTypes.string.isRequired,
    })
  ),
};
