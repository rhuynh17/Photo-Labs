import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__icons">
        {/* Replace the following placeholders with actual icons/components */}
        <span className="top-nav-bar__icon">Topics</span>
        <span className="top-nav-bar__icon">Total Liked</span>
        <FavBadge />
      </div>
    </div>
  );
};

export default TopNavigationBar;