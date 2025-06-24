import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, favorites, toggleFavorite, handleTopicClick, onPhotoClick } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} handleTopicClick={handleTopicClick} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} onPhotoClick={onPhotoClick} />
    </div>
  );
}

export default HomeRoute;