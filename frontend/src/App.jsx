import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import { FavouritePhotosProvider } from './components/FavouritePhotosContext';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="App">
      <FavouritePhotosProvider>
        <HomeRoute
          topics={topics}
          photos={photos}
          toggleFavourite={toggleFavourite}
          favouritePhotos={favouritePhotos}
          handleOpenModal={handleOpenModal}
        />
        {isModalOpen && <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />}
      </FavouritePhotosProvider>
    </div>
  );
};

export default App;
