import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose, photo }) => {
  useEffect(() => {
    if (photo) {
      console.log(photo); 
    }
  }, [photo]);

  if (!isOpen) return null;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
      <button className="photo-details-modal__close-button" onClick={props.onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;