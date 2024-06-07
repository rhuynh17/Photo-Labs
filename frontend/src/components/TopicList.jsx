import React from 'react';
import '../styles/TopicList.scss';

const TopicList = ({ topics }) => {
  return (
    <div className="topic-list">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
