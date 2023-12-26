import axios from 'axios';

const baseUrl = `https://api.themoviedb.org/3/`;
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2QwMjBlM2RjZjZiOTcyMjUzMjdhZjVlMWUzNzU1NSIsInN1YiI6IjY1OGFlYjhlMDcyMTY2Njg1YWE1Yzc0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvotZh6KyysO4resszDKkndp4RGhU8nwgSb0qox9yQk',
  },
};
//// FETCH TRENDING MOVIES ////
export const getTrendingMovies = async () => {
  const url = `${baseUrl}trending/movie/day?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH SEARCHING MOVIES BY NAME ////
export const getMovies = async query => {
  const url = `${baseUrl}search/movie?query=${query}&include_adult=false&language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE DETAILS BY MOVIE ID ////
export const getMovieDetails = async id => {
  const url = `${baseUrl}movie/${id}?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE CREDITS BY MOVIE ID ////
export const getMovieCredits = async id => {
  const url = `${baseUrl}movie/${id}/credits?language=en-US`;
  const resp = await axios.get(url, options);
  return resp;
};
//// FETCH MOVIE REVIEWS BY MOVIE ID ////
export const getMovieReviews = async id => {
  const url = `${baseUrl}movie/${id}/reviews?language=en-US&page=1`;
  const resp = await axios.get(url, options);
  return resp;
};
