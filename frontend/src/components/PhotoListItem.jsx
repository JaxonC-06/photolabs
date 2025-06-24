import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {photo, favorites, toggleFavorite, onPhotoClick} = props;
  const {id, location, urls, user} = photo;

  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(photo)} >
      <PhotoFavButton id={id} favorites={favorites} toggleFavorite={toggleFavorite} />
      <img src={urls.regular} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p>{user.name}</p>
          <div className="photo-list__user-location">{location.city}, {location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
