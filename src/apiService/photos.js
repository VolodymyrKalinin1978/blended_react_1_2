import axios from 'axios';
import { normolizedDataImage } from '../helpers/normolizedDataImage';

const API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getPhotos = async (query, page) => {
  const {
    data: { photos, per_page, total_results },
  } = await axios.get(`search?query=${query}&page=${page}`);

  return { photos: normolizedDataImage(photos), total_results, per_page };
};
