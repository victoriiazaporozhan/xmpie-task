import { useEffect, useState, useCallback } from "react";
import { useApi } from './useApi.ts';

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

  const getItemFromLocalStorage = (id) => {
    try {
      const item = localStorage.getItem(id);
      return item;
    } catch {
      return null;
    }
  };

  const setItemToLocalStorage = (id: string, value: string) => {
    try {
      localStorage.setItem(id, value);
    } catch {
      return null;
    }
  };

  const removeItemFromLocalStorage = (id: string) => {
    try {
      localStorage.removeItem(id.toString());
    } catch {
      return null;
    }
  }

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