import React, { FC, useState } from "react";
import Modal from 'react-modal';
import { ImageCard } from "./ImageCard.tsx";

interface Props {
    showResults: boolean;
    images: Record<string, string>[] | null;
    isLoading: boolean;
}

Modal.setAppElement(document.getElementById('images'));

export const SearchedImages: FC<Props> =({ showResults, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<Record<string, string> | null>(null);

  const onImageClick = async (image) => {
    await setClickedImage(image);
    setIsModalOpen(true);
  }

  const onCloseModal = () => {
    setClickedImage(null);
    setIsModalOpen(false);
  }

  if (!images?.length) {
    return (
      <div className={`empty-container ${showResults ? 'show' : 'hide'}`}>
        <p>Nothing was found. <br /> Change your query and try again.</p>
      </div>
    )
  };

  return (
    <div id="images" className={`results-container ${showResults ? 'show' : 'hide'}`}>
      <div className="images-box">
        {images?.map((image) => <ImageCard image={image} onImageClick={onImageClick} />)}
      </div>
      {clickedImage && isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={onCloseModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <img className="clicked-image" src={clickedImage.largeImageURL} />
        </Modal>
      )}
    </div>
  )
}