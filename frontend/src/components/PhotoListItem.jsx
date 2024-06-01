import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, toggleFavourite, favouritePhotos, handleOpenModal }) => {
  const { username, profile } = photo.user;
  const { city, country } = photo.location;
  const { regular: imageSource } = photo.urls;

  const handleClick = () => {
    handleOpenModal(); 
  };

  return (
    <div className="photo-list__item" key={photo.id} onClick={handleClick}> 
      <div className="photo-list__like-button">
        <PhotoFavButton photoId={photo.id} toggleFavourite={toggleFavourite} isFavourite={favouritePhotos.includes(photo.id)} />
      </div>
      <img src={imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h3>{username}</h3>
          <div className="photo-list__location">{`${city}, ${country}`}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
