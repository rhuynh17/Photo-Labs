import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavourite, favouritePhotos, handleOpenModal }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList
        photos={photos}
        toggleFavourite={toggleFavourite}
        favouritePhotos={favouritePhotos}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
};

export default HomeRoute;