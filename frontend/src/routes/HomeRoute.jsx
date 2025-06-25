import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import SearchBar from "../components/SearchBar";

const HomeRoute = (props) => {
  const { photos, topics, favorites, searchValue, searchResults, dispatch, toggleFavorite, handleTopicClick, onPhotoClick } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} handleTopicClick={handleTopicClick} />
      <SearchBar searchValue={searchValue} searchResults={searchResults} dispatch={dispatch} photos={photos} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} onPhotoClick={onPhotoClick} />
    </div>
  );
}

export default HomeRoute;