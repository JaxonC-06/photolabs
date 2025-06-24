import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, label, handleTopicClick } = props;

  return (
    <div className="topic-list__item" onClick={() => handleTopicClick(id)}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
