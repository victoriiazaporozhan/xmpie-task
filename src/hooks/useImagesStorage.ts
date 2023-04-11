import { useEffect, useState, useCallback } from "react";
import { useApi } from './useApi.ts';
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
  removeItemFromLocalStorage
} from '../utils/localStorage.ts';

export const useImagesStorage = (searchQuery: string) => {
  const [images, setImages] = useState<{id: number, webformatURL: string, isFavorite: boolean}[]>([]);
  const getImages = useApi();

  const getImagesByQuery = useCallback(async () => {
    const items = await getImages(searchQuery);

    let sortedImages = items?.map((item) => {
      const isItemFavorite = !!getItemFromLocalStorage(item.id);
      item.isFavorite = isItemFavorite;

      return item;
    });

    setImages(sortedImages);
  }, [searchQuery]);

  useEffect(() => {
    searchQuery && getImagesByQuery();
  }, [searchQuery]);

  const toggleFavorites = useCallback( async (id: number, value: string) => {
    const isItemFavorite = localStorage.getItem(String(id));
    if (isItemFavorite) {
      removeItemFromLocalStorage(String(id))
    } else {
      setItemToLocalStorage(String(id), value);
    }

    const newImages = images.map((item) => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });

    setImages(newImages);
    return;
  }, [images]);

  return {toggleFavorites, images};
}