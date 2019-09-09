import axios from 'axios';
// import env from '../../.env';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchInPixabay = (search, page) => {
  // const key = `?key=${process.env.API_KEY}`;
  const key = `?key=4538480-79c9c9818a25ea412184f7398`;
  const settings = `&image_type=photo&orientation=horizontal`;
  const query = `&q=${search}`;
  const perPage = `&per_page=12`;
  const currentPage = `&page=${page}`;
  return axios.get(key + settings + query + perPage + currentPage);
};

export const a = null;
