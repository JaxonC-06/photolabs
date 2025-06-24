import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, handleTopicClick } = props;
  
  const topicMap = topics.map((topic) => (
    <TopicListItem 
      key={topic.id}
      id={topic.id}
      slug={topic.slug} 
      label={topic.title}
      handleTopicClick={handleTopicClick}
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicMap}
    </div>
  );
};

export default TopicList;
