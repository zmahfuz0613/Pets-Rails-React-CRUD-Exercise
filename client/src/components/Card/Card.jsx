import React from 'react';

export default function Card(props) {
  const { title, image, description } = props;
  return (
      <div className="card">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
  )
}
