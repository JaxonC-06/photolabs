import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favorites, toggleFavorite, onPhotoClick } = props;
  const photoMap = Array.isArray(photos)
    ? photos.map((photoData) => (
        <li key={photoData.id}>
          <PhotoListItem
            photo={photoData}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onPhotoClick={onPhotoClick}
          />
        </li>
      ))
    : null;

  return (
    <ul className="photo-list">
      {photoMap || <span>No photos available!</span>}
    </ul>
  );
};

export default PhotoList;
