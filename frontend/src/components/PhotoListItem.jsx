import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = () => {
  const { username, imageSource, id, location , profile } = sampleDataForPhotoListItem;
  return (
    <div className="photo-list-item" key={id}>
      <img src={imageSource} alt="Photo" className="photo" />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <h3>{username}</h3>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};


export default PhotoListItem;
