import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favorites, toggleFavorite, onPhotoClick } = props;
  const photoMap = photos.map((photoData) => (
    <li key={photoData.id}>
      <PhotoListItem
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
