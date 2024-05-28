import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ photo, toggleFavourite, favouritePhotos }) => {
  console.log("favouritePhotos:", favouritePhotos);
  console.log("photo.id:", photo.id);
  const { username, profile } = photo.user;
  const { city, country } = photo.location;
  const { regular: imageSource } = photo.urls;
  const isFavourite = favouritePhotos.includes(photo.id);

  return (
    <div className="photo-list__item" key={photo.id}>
      <div className="photo-list__like-button">
        <PhotoFavButton photoId={photo.id} toggleFavourite={toggleFavourite} isFavourite={isFavourite} />
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
