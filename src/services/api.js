import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchInPixabay = (search, page) => {
  const key = `?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
  const settings = `&image_type=photo&orientation=horizontal`;
  const query = `&q=${search}`;
  const perPage = `&per_page=12`;
  const currentPage = `&page=${page}`;
  return axios.get(key + settings + query + perPage + currentPage);
};

export const a = null;
