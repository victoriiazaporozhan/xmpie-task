import React, { FC, useEffect, useState } from 'react';
import { SearchBar } from '../components/SearchBar.tsx';
import { SearchedImages } from '../components/SearchedImages.tsx';
import { useImagesStorage } from '../hooks/useImagesStorage.ts';

import '../styles/HomePage.css';

export const HomePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const {toggleFavorites, images} = useImagesStorage(searchQuery);

  const onSearch = async (query) => {
    setIsLoading(true);
    setSearchQuery(query)
    setShowResults(true);
  }

  useEffect(() => {
    setIsLoading(false);
  }, [images])

  return (
    <div className="home-page">
      <SearchBar
        onSearch={onSearch}
        isLoading={isLoading}
      />
      <SearchedImages
        isLoading={isLoading}
        showResults={showResults}
        toggleFavorites={toggleFavorites}
        images={images}
      />
    </div>
  )
}