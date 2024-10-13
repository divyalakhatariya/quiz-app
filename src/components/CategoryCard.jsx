import React from 'react';

const CategoryCard = ({ title, count, icon }) => {
  return (
    <div className="category-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>count {count}</p>
    </div>
  );
};

export default CategoryCard;
