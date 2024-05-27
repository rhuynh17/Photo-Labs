import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  const { username, profile } = photo.user;
  const { city, country } = photo.location;
  const { regular: imageSource } = photo.urls;
  
  return (
    <div className="photo-list__item" key={photo.id}>
      <img src={imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <h3>{username}</h3>
        <p>{`${city}, ${country}`}</p>
        <PhotoFavButton /> 
      </div>
    </div>
  );
};

export default PhotoListItem;
