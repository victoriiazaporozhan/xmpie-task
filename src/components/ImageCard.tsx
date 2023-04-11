import React, { FC } from "react"
import { IoHeartOutline, IoHeart } from 'react-icons/io5';
import '../styles/ImageCard.css';

interface Props {
  imageId: string;
  imageURL: string;
  isFavorite: boolean;
  onImageClick?: (imageURL) => void;
  onFavoriteClick: () => void;
}

export const ImageCard: FC<Props> = ({
  imageId,
  imageURL,
  isFavorite,
  onFavoriteClick,
  onImageClick = () => {},
}) => {
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