import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;