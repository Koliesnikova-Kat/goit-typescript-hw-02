import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/search/photos';

const API_KEY = 'snzRhUCFTFgGr0RziiSbrW4le52y55gJe-v-qN-b_eo';

export interface PictureCard {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
  alt_description: string | null;
}

export const fetchedPictures = async (
  query: string,
  page: number
): Promise<PictureCard[]> => {
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
};
