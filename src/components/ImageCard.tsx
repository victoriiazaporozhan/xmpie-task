import React, { FC, useEffect, useState } from "react"
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import '../styles/ImageCard.css';

interface Props {
  imageId: string;
  imageURL: string;
  onUpdate?: (imageId) => void;
  onImageClick: (imageURL) => void;
}

export const ImageCard: FC<Props> = ({ imageId, imageURL, onImageClick, onUpdate = () => {} }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let isFav = localStorage.getItem(imageId);
    setIsFavorite(!!isFav);
  }, [isFavorite, imageId])

  const onFavoriteClick = () => {
    onUpdate(imageId);
    const isImageFavorite = (localStorage.getItem(imageId));

    if(isImageFavorite) {
      localStorage.removeItem(imageId);
      setIsFavorite(false);
    } else {
      localStorage.setItem(imageId, imageURL);
      setIsFavorite(true);
    }
  }

  return (
    <div className="card-box">
      <img
        key={imageId}
        src={imageURL}
        className="image"
        alt="name"
        onClick={() => onImageClick(imageURL)}
      />
      <button
        className="icon"
        onClick={onFavoriteClick}
      >{isFavorite ? <IoHeart /> : <IoHeartOutline />}</button>
    </div>
  )
}