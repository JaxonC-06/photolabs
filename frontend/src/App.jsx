import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(photoId)) {
        return prevFavorites.filter(id => id !== photoId);
      } else {
        return [...prevFavorites, photoId]
      }
    });
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics}
        favorites={favorites}
        toggleFavorite={toggleFavorite} 
      />
    </div>
  );
};

export default App;
