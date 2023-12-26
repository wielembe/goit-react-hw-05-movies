import { getTrendingMovies } from 'Api/ApiRequests';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies.data.results);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className={css.container}>
        <h2>Trending today</h2>
        <ul>
          {trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>
              <Link className={css.movieLink} to={`movies/${trendingMovie.id}`}>
                {trendingMovie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default Home;

Home.propTypes = {
  trendingMovies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
    })
  ),
};
