import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics, favorites, toggleFavorite } = props;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {favorites.length === 0 && <FavBadge isFavPhotoExist={false} />}
      {favorites.length > 0 && <FavBadge isFavPhotoExist={true}/>}
    </div>
  )
};

export default TopNavigation;
