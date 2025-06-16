import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.sampleData;

  return (
    <div key={id}>
      <img src={urls.regular} />
      <img src={user.profile} />
      <p>{user.name}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  )
};

export default PhotoListItem;
