import React, { FC, useState } from "react";
import Modal from 'react-modal';
import { ImageCard } from "./ImageCard.tsx";
import '../styles/SearchedImages.css';

interface Props {
    showResults: boolean;
    images: Record<string, string>[] | null;
    isLoading: boolean;
}

Modal.setAppElement(document.getElementById('images'));

export const SearchedImages: FC<Props> =({ showResults, images, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageURL, setImageURL] = useState<string>('');

  const onImageClick = async (image) => {
    setImageURL(image);
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setImageURL('');
    setIsModalOpen(false);
  }

  if (!images?.length && !isLoading) {
    return (
      <div className={`empty-container ${showResults ? 'show' : 'hide'}`}>
        <p>😖 No results found.</p>
      </div>
    )
  };

  if (images?.length) {
    return (
      <div id="images" className={`results-container ${showResults ? 'show' : 'hide'}`}>
        <div className="images-box">
          {isLoading ? <h1>Loading ...</h1> : images?.map((image) => <ImageCard key={image.id} imageId={image.id} imageURL={image.webformatURL} onImageClick={onImageClick} />)}
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
}