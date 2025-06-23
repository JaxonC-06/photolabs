import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useAppData from './hooks/useApplicationData.js';
import { ACTIONS } from './hooks/useApplicationData.js';

const App = () => {
  const {
    state,
    dispatch,
    handlePhotoClick,
    toggleFavorite
  } = useAppData();

  const {favorites, modal, selectedPhoto, photoData, topicData} = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData} 
        topics={topicData}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        onPhotoClick={handlePhotoClick}
      />
      {
        modal && selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={() => dispatch({type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: false })}
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
