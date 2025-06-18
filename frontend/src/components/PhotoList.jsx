import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favorites, toggleFavorite, onPhotoClick } = props;
  const photoMap = photos.map((photoData) => (
    <li>
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPhotoClick={onPhotoClick}
      />
    </li>
  ));

  return (
    <ul className="photo-list">
      {photoMap}
    </ul>
  );
};

export default PhotoList;
