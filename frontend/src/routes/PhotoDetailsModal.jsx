import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, onClose, favorites, toggleFavorite, onPhotoClick } = props;
  const { id, location, similar_photos, urls, user } = photo;
  const { regular } = urls;
  const { profile, name } = user;
  const { city, country } = location;

  const similarPhotos = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        <div className='photo-details-modal__image'>
          <PhotoFavButton id={id} favorites={favorites} toggleFavorite={toggleFavorite} />
          <img className='photo-details-modal__image' src={regular}/>
        </div>
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={profile}/>
          <div className='photo-details-modal__photographer-info'>
            <p>{name}</p>
            <p className='photo-details-modal__photographer-location'>{city}, {country}</p>
          </div>
        </div>
        <h1 className='photo-details-modal__header'>Similar Photos</h1>
        <div className='photo-details-modal__images'>
          <PhotoList 
            photos={similarPhotos} 
            favorites={favorites} 
            toggleFavorite={toggleFavorite} 
            onPhotoClick={onPhotoClick}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
