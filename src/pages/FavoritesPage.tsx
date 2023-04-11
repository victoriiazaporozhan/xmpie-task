import React, { useLayoutEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ImageCard } from "../components/ImageCard.tsx";
import { removeItemFromLocalStorage } from '../utils/localStorage.ts';

import "../styles/FavoritesPage.css";

export const FavoritesPage = () => {
  const [favoriteImages, setFavoriteImages] = useState<[string, string][]>([]);

  useLayoutEffect(() => {
    const savedImages = Object.entries(localStorage);
    setFavoriteImages(savedImages);
  }, []);

  const removeFromFavorites = (id: string) => {
    removeItemFromLocalStorage(id);
    const savedImages = Object.entries(localStorage);
    setFavoriteImages(savedImages);
  };

  if (!favoriteImages.length) {
    return (
      <div className="favorites-page">
        <header>
          <h1>Favorite Images</h1>
        </header>
        <div className="empty-box">
          <h1>You didn't add anything to Favorites</h1>
        </div>
        <Link to='/' className="home-page-link">Home Page</Link>
      </div>
    )
  }
  return (
    <div className="favorites-page">
      <header>
        <Link to='/' className="home-page-link">Home Page</Link>
        <h1>Favorite Images</h1>
      </header>
      <div className="images-box">
        {favoriteImages?.map((image) => (
          <ImageCard
            key={image[0]}
            imageURL={image[1]}
            imageId={image[0]}
            isFavorite
            onFavoriteClick={() => removeFromFavorites(image[0])}
          />
        ))}
      </div>
    </div>
  )
}