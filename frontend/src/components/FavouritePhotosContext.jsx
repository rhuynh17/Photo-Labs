import React, { createContext, useState } from 'react';

const FavouritePhotosContext = createContext();

export const FavouritePhotosProvider = ({ children }) => {
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favouritePhotos.includes(photoId)) {
      setFavouritePhotos(favouritePhotos.filter((id) => id !== photoId));
    } else {
      setFavouritePhotos([...favouritePhotos, photoId]);
    }
  };

  return (
    <FavouritePhotosContext.Provider value={{ favouritePhotos, toggleFavourite }}>
      {children}
    </FavouritePhotosContext.Provider>
  );
};

export default FavouritePhotosContext;
