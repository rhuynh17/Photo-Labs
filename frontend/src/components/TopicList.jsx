import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from '../mocks/topics';


const TopicList = () => {
  return (
    <div className="topic-list">
      {topics.map((topic) => ( 
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};
export default TopicList;