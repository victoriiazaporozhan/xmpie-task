import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ImageCard } from "../components/ImageCard.tsx";
import "../styles/FavoritesPage.css";

export const FavoritesPage = () => {
  const [images, setImages] = useState<[string, string][]>([]);
  const [updated, setUpdated] = useState();

  useEffect(() => {
    const savedImages = Object.entries(localStorage);
    setImages(savedImages);
  }, [updated]);

  const onUpdate = (imageId) => {
    setUpdated(imageId);
  };

  return (
    <div className="favorites-page">
      <header>
        <Link to='/' className="back-button">Back</Link>
        <h1>Favorite Images</h1>
      </header>
      <div className="images-box">
        {images?.map((image) => (
          <ImageCard key={image[0]} imageURL={image[1]} imageId={image[0]} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  )
}