import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__icons">
        <TopicList />
        <span className="top-nav-bar__icon">Total Liked</span>
        <FavBadge likedPhotosCount={5} /> 
      </div>
    </div>
  );
};

export default TopNavigationBar;