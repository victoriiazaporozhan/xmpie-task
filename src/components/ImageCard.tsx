import React, { FC } from "react"

interface Props {
  image: Record<string, string>;
  onImageClick: (image) => void
}

export const ImageCard: FC<Props> = ({ image, onImageClick }) => {
  return (
    <div className="card-box">
      <img
        key={image.id}
        src={image.webformatURL}
        className="image"
        alt="name"
        onClick={() => onImageClick(image)}
      />
      <div className="icon">icon</div>
    </div>
  )
}