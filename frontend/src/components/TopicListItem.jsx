import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { key, slug, label } = props;

  return (
    <div className="topic-list__item" key={key}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
