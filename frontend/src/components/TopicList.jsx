import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;
  
  const topicMap = topics.map((topic) => (
    <TopicListItem 
      key={topic.id} 
      slug={topic.slug} 
      label={topic.title} 
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicMap}
    </div>
  );
};

export default TopicList;
