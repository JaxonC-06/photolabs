import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import { useState } from "react";

const PhotoListItem = (props) => {
  const [liked, setLiked] = useState(false);

  const switchLiked = () => setLiked((liked === true) ? false : true);

  const {id, location, urls, user} = props.photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton liked={liked} switchLiked={switchLiked} />
      <img src={urls.regular} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
