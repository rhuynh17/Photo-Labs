import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo, similarPhotos }) => {
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close" onClick={onClose}>×</button>
      {photo && (
        <div className="photo-details-modal__content">
          <img src={photo.urls.regular} alt={photo.alt_description} className="photo-details-modal__image" />
          <h2>{photo.description || 'No description available'}</h2>
        </div>
      )}
      <div className="photo-details-modal__similar">
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__similar-photos">
          {similarPhotos.map((similarPhoto) => (
            <img
              key={similarPhoto.id}
              src={similarPhoto.urls.thumb}
              alt={similarPhoto.alt_description}
              className="photo-details-modal__similar-photo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
