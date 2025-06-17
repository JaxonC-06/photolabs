import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { id, favorites, toggleFavorite } = props;
  const handleClick = () => toggleFavorite(id);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon selected={favorites.includes(id)}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
