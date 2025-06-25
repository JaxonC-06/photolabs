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
    handleTopicClick,
    toggleFavorite
  } = useAppData();

  const {favorites, modal, selectedPhoto, photoData, topicData, searchValue, searchResults} = state;

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData} 
        topics={topicData}
        favorites={favorites}
        searchValue={searchValue}
        searchResults={searchResults}
        dispatch={dispatch}
        toggleFavorite={toggleFavorite}
        handleTopicClick={handleTopicClick}
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
