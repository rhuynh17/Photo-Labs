import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, toggleFavourite, handleOpenModal, favouritePhotos }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} toggleFavourite={toggleFavourite} handleOpenModal={handleOpenModal} favouritePhotos={favouritePhotos} />
      ))}
    </ul>
  );
};

export default PhotoList;
