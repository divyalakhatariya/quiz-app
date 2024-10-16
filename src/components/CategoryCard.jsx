import React from 'react';


const CategoryCard = ({ title, count, icon }) => {
  return (
    <div className="category-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
};

export default CategoryCard;
