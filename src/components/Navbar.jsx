import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Quiz</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
