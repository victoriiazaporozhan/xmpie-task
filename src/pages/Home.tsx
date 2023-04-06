import React, { FC, useState } from 'react';
import { SearchBar } from '../components/SearchBar.tsx';
import { SearchedImages } from '../components/SearchedImages.tsx';
import { searchImages } from '../api/images.ts';

export const HomePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [show, setShow] = useState(false);

  const onSearch = async (query) => {
    setIsLoading(true);
    const res = await searchImages(query);
    setImages(res.hits);
    setIsLoading(false);
    setShow(true);
  }

  return (
    <div className="home-page">
      <SearchBar
        onSearch={onSearch}
        isLoading={isLoading}
      />
      <SearchedImages
        isLoading={isLoading}
        showResults={show}
        images={images}
      />
    </div>
  )
}