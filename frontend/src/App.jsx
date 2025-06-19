import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useAppData from './hooks/useApplicationData.js';
import { ACTIONS } from './hooks/useApplicationData.js';

const App = () => {
  const {
    favorites,
    modal,
    dispatchModal,
    selectedPhoto,
    handlePhotoClick,
    toggleFavorite
  } = useAppData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPhotoClick={handlePhotoClick}
      />
      {
        modal && selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={() => dispatchModal({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false })}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onPhotoClick={handlePhotoClick}
          />
        )
      }
    </div>
  );
};

export default App;
