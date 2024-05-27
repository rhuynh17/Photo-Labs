import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
      <FavIcon displayAlert={likedPhotosCount > 0} />
      {likedPhotosCount > 0 && <span className="fav-badge__count">{likedPhotosCount}</span>}
    </div>
  ) 
};

export default FavBadge;