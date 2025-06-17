import "../styles/HomeRoute.scss";
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

const HomeRoute = (props) => {
  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
}

export default HomeRoute;