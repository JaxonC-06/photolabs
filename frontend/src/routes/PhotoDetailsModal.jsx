import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { photo, onClose, favorites, toggleFavorite, onPhotoClick } = props;
  const { id, location, similar_photos, urls, user } = photo;

  const similarPhotos = Object.keys(similar_photos).map(photo => {
    return similar_photos[photo];
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
          <img className='photo-details-modal__image' src={urls.regular}/>
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={user.profile}/>
          <div className='photo-details-modal__photographer-info'>
            <p>{user.name}</p>
            <p className='photo-details-modal__photographer-location'>{location.city}, {location.country}</p>
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
