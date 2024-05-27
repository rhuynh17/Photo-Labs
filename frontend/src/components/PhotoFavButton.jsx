import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prevIsActive => !prevIsActive);
  };

  return (
    <div className={`photo-list__fav-icon ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
