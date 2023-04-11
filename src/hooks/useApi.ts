import { toast } from 'react-toastify';
import { searchImages } from "../api/images.ts";

export const useApi = () => {
  const getImages = async (queryString) => {
    try {
      const result = await searchImages(queryString);

      return result.hits;
    } catch (error) {
      toast(error.message, { type: 'error'})

      return null;
    }
  }

  return getImages;
}