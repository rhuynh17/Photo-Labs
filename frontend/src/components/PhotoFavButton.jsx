import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavouritePhotosContext from './FavouritePhotosContext';

const PhotoFavButton = ({ photoId }) => {
  const { favouritePhotos, toggleFavourite } = useContext(FavouritePhotosContext);
  const isFavourite = favouritePhotos.includes(photoId);

  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className={`photo-list__fav-icon ${isFavourite ? 'active' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
