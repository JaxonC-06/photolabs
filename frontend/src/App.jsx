import TopNavigation from './components/TopNavigationBar';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = [...Array(3)];
  // const photoItems = photos.map((photo, index) => (
  //   <PhotoListItem
  //     key={index}
  //     photo={sampleDataForPhotoListItem}
  //   />
  // ));

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
