import { getMovies } from 'Api/ApiRequests';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const urlQuery = urlSearchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    setUrlSearchParams({ query: e.target.elements.input.value });
  };

  const fetchMovies = async query => {
    try {
      const fetchedMovies = await getMovies(query);
      setMovies(fetchedMovies.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchMovies(urlQuery);
  }, [urlQuery]);

  return (
    <main>
      <div className={css.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            autoComplete="off"
            defaultValue={urlQuery}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                className={css.movieLink}
                to={`${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default Movies;

Movies.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};
