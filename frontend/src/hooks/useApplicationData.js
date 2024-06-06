import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const onPhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return {
    state: {
      topics,
      photos,
      favouritePhotos,
      isModalOpen,
      selectedPhoto,
    },
    toggleFavourite,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
