import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  const { username, profile } = photo.user;
  const { city, country } = photo.location;
  const { regular: imageSource } = photo.urls;

  return (
    <div className="photo-list__item" key={photo.id}>
      <div className="photo-list__like-button">
        <PhotoFavButton photoId={photo.id} />
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
