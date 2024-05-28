import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, toggleFavourite, favouritePhotos }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} />
    </div>
  );
};

export default HomeRoute;
