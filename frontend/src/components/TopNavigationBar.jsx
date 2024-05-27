// topnavigationbar.jsx
import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const likedPhotosCount = 5; //placeholder
  const isFavPhotoExist = true; 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__icons">
        <TopicList />
        <span className="top-nav-bar__icon">Total Liked</span>
        <FavBadge isFavPhotoExist={isFavPhotoExist} likedPhotosCount={likedPhotosCount} /> 
      </div>
    </div>
  );
};

export default TopNavigationBar;
