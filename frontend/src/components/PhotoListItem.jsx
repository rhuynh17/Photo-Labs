import React from 'react';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props.photo;
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} alt="Photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <h3>{username}</h3>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;