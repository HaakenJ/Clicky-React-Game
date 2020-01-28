import React from 'react';
import './style.css';

function NavBar({
  notification,
  score,
  topScore
}) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className={notification.includes(" correctly") ? 
          "correct": 
          "incorrect"}
        >
          {notification}
        </li>
        <li>
          Score: {score} | Top Score: {topScore}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
