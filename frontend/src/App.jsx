import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useAppData from './hooks/useApplicationData';

const App = () => {
  const {
    favorites,
    modal,
    setModal,
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
            onClose={() => setModal(false)}
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
