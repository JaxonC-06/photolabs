import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, favorites, toggleFavorite, onPhotoClick } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} onPhotoClick={onPhotoClick} />
    </div>
  );
}

export default HomeRoute;