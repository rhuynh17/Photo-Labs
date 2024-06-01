import React, { useContext } from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavouritePhotosContext from './FavouritePhotosContext';

const TopNavigationBar = ({ topics }) => {
  const { favouritePhotos } = useContext(FavouritePhotosContext);
  const likedPhotosCount = favouritePhotos.length;
  const isFavPhotoExist = likedPhotosCount > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__icons">
        <div className="top-nav-bar__topic-list">
          <TopicList topics={topics} />
        </div>
        <span className="top-nav-bar__icon"></span>
        <FavBadge isFavPhotoExist={isFavPhotoExist} likedPhotosCount={likedPhotosCount} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
