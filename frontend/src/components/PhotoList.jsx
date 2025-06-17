import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos } = props;
  const photoMap = photos.map((photoData) => (
    <li>
      <PhotoListItem
        key={photoData.id}
        photo={photoData}
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
