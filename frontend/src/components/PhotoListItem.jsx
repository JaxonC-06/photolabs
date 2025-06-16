import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.sampleData;

  return (
    <div key={id} className="photo-list__item">
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
