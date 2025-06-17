import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favorites, toggleFavorite } = props;
  const photoMap = photos.map((photoData) => (
    <li>
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
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
