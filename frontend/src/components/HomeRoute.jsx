import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {
  const { photos, topics, favorites, toggleFavorite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} toggleFavorite={toggleFavorite} />
      <PhotoList photos={photos} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default HomeRoute;