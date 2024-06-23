// Card.js
import React from 'react';

const Card = ({ imgSrc, title }) => {
  return (
    <div className="card">
      <img src={imgSrc} style={{ maxWidth: '100%', height: 'auto' }} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default Card;
