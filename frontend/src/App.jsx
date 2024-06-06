import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import { FavouritePhotosProvider } from './components/FavouritePhotosContext';
import './App.scss';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  const {
    state,
    toggleFavourite,
    onPhotoSelect,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <FavouritePhotosProvider>
        <HomeRoute
          topics={state.topics}
          photos={state.photos}
          toggleFavourite={toggleFavourite}
          favouritePhotos={state.favouritePhotos}
          handleOpenModal={onPhotoSelect}
        />
        {state.isModalOpen && (
          <PhotoDetailsModal
            isOpen={state.isModalOpen}
            onClose={onClosePhotoDetailsModal}
            photo={state.selectedPhoto}
            similarPhotos={state.photos} 
          />
        )}
      </FavouritePhotosProvider>
    </div>
  );
};

export default App;