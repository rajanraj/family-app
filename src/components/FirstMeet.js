import React from 'react';

const Engagement = () => {
  return (
    <div className="story-page">
      <h2>Engagement</h2>
      {/* <img
        src={require('../assets/images/Engagement.jpg')}
        alt="Engagement"
        style={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 12,
          margin: '2rem auto',
          display: 'block',
          boxShadow: '0 6px 24px rgba(0,0,0,0.25)'
        }}
      /> */}
      <p>The beautiful promise we made to each other on <strong>May 24, 2023</strong>...</p>
      <blockquote style={{ fontStyle: 'italic', margin: '2rem auto', maxWidth: 500 }}>
        "Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
      </blockquote>
      <blockquote style={{ fontStyle: 'italic', margin: '2rem auto', maxWidth: 500 }}>
        "Every love story is beautiful, but ours is my favorite."
      </blockquote>
    </div>
  );
};

export default Engagement;