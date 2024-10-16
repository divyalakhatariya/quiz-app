import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/Home.css';
import '../Css/CategoryCard.css';

const categories = [
  { title: 'General Knowledge', icon: 'general-knowledge.png' },
  { title: 'Books',  icon: 'books.png' },
  { title: 'Film',  icon: 'film.png' },
  { title: 'Music',  icon: 'music.png' },
  { title: 'Television', icon: 'television.png' },
  { title: 'Video Games',  icon: 'video-games.png' },
  { title: 'Board Games', icon: 'board-games.png' },
  { title: 'Science & Nature',  icon: 'science-nature.png' },
  { title: 'Computers',  icon: 'computers.png' },
  { title: 'Mathematics',  icon: 'mathematics.png' },
  { title: 'Sports',  icon: 'sports.png' },
  { title: 'Geography',  icon: 'geography.png' },
  { title: 'History',  icon: 'history.png' },
  { title: 'Politics',  icon: 'politics.png' },
  { title: 'Art',  icon: 'art.png' },
  { title: 'Animals',  icon: 'animals.png' },
  { title: 'Vehicles',  icon: 'vehicles.png' },
];

const Home = () => {
  return (
    <div className="home">
      <h2>Categories</h2>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            <img
              src={`/icons/${cat.icon}`}
              alt={`${cat.title} icon`}
              style={{ width: '60px', height: '60px' }}  // Adjust the size as needed
            />
            <h3>{cat.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
