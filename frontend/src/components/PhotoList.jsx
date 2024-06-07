import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, toggleFavourite, favouritePhotos, handleOpenModal }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={toggleFavourite}
          favouritePhotos={favouritePhotos}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
};

export default PhotoList;