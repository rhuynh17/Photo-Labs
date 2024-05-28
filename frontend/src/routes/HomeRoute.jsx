import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavourite, handleOpenModal, favouritePhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} handleOpenModal={handleOpenModal} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;
