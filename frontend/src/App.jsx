import React, { useState } from 'react';
import HomeRoute from './components/HomeRoute';
import { FavouritePhotosProvider } from './components/FavouritePhotosContext';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  return (
    <div className="App">
      <FavouritePhotosProvider>
        <HomeRoute topics={topics} photos={photos} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} />
      </FavouritePhotosProvider>
    </div>
  );
};

export default App;
