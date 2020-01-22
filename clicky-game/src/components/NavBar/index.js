import React from 'react';
import './style.css';

function NavBar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li className={props.notification.includes(" correctly") ? 
          "correct": 
          "incorrect"}
        >
          {props.notification}
        </li>
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
