import propTypes from 'prop-types';
import css from './ChosenMovie.module.css';

export const ChosenMovie = (movie, genres) => {
  return (
    <>
      {movie.movie.id !== undefined && (
        <div className={css.movieContainer}>
          <div>
            {movie.movie.poster_path ? (
              <img
                className={css.moviePoster}
                src={`https://image.tmdb.org/t/p/w300${movie.movie.poster_path}`}
                alt={movie.movie.title}
              />
            ) : (
              <p>No poster provided.</p>
            )}
          </div>
          <div>
            <h2>
              {movie.movie.title} ({movie.movie.release_date.split('-')[0]})
            </h2>
            <p>User Score: {Math.round(movie.movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.movie.overview}</p>
            <h4>Genres</h4>
            <p>
              {movie.genres.length &&
                movie.genres.map(genre => genre.name + ' ')}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

ChosenMovie.propTypes = {
  movie: propTypes.shape({
    genre: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
      })
    ),
    movie: propTypes.shape({
      id: propTypes.number.isRequired,
      poster_path: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      release_date: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
      overview: propTypes.string.isRequired,
    }),
  }),
};
