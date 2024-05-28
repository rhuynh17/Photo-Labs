import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="photo-details-modal-overlay">
      <div className="photo-details-modal">
        {/*placeholder*/}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;