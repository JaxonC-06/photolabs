import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { key, slug, label } = props;

  return (
    <div className="topic-list__item" key={key}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
