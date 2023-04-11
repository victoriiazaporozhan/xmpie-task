import React, { FC, useEffect, useState } from "react";
import Modal from 'react-modal';
import { ImageCard } from "./ImageCard.tsx";
import '../styles/SearchedImages.css';

interface Props {
  images: Record<string, string>[] | null;
  showResults: boolean;
  isLoading: boolean;
  toggleFavorites: (id: string, url: string) => void;
}

export const SearchedImages: FC<Props> =({ showResults, images, isLoading, toggleFavorites }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    Modal.setAppElement(document.getElementById('images'));
  }, [])

  const onImageClick = async (imageURL) => {
    setImageURL(imageURL);
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setImageURL('');
    setIsModalOpen(false);
  }

  return (
    <div id="images" className={`results-container ${showResults ? 'show' : 'hide'}`}>
      {isLoading && <h1>Loading ...</h1>}
      {!images?.length && !isLoading && <h1>😖 No results found.</h1>}
      <div className="images-box">
        {!isLoading && images?.map((image) => 
          <ImageCard
            key={image.id}
            imageId={image.id}
            imageURL={image.webformatURL}
            onImageClick={onImageClick}
            onFavoriteClick={() => toggleFavorites(image.id, image.webformatURL)}
            isFavorite={image.isFavorite}
          />)}
      </div>
      {imageURL && isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={onCloseModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img className="clicked-image" src={imageURL} alt={imageURL} />
        </Modal>
      )}
    </div>
  )
}