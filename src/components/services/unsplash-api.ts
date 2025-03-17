import axios from 'axios';
import { PictureCard } from '../types';

const BASE_URL = 'https://api.unsplash.com/search/photos';

const API_KEY = 'snzRhUCFTFgGr0RziiSbrW4le52y55gJe-v-qN-b_eo';

export const fetchedPictures = async (
  query: string,
  page: number
): Promise<PictureCard[]> => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        query,
        page,
        per_page: 12,
        orientation: 'landscape',
        client_id: API_KEY,
      },
    });

    return response.data.results;
  } catch (e) {
    throw e;
  }
};
