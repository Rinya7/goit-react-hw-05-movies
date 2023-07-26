import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c3df5a4167bc599ea01cc6d24cc75ad';
//const TREND_DAY = 'trending/movie/day';
//const SEARCH = 'search/movie';
//const MOVIE_INFO = 'movie/{movie_id}';
//const MOVIE_ACTORS = 'movie/{movie_id}/credits';
//const MOVIE_REWIEWS = 'movie/{movie_id}/reviews';
export const trendingFilmsFromApi = async () => {
  const { data } = await axios(`trending/movie/day?api_key=${API_KEY}`);
  return data;
};

export const filmsFromApiById = async id => {
  const { data } = await axios(`movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const castFromApiById = async id => {
  const { data } = await axios(`movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const rewiewsFromApiById = async id => {
  const { data } = await axios(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};

export const searchFilmsFromApi = async searchword => {
  const { data } = await axios(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${searchword}`
  );
  return data;
};
