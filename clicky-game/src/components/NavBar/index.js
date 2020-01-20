import React from "react";
import "./style.css";

function NavBar(props) {
    <nav className="navbar">
        <ul>
            <li className="brand">
                <a href="/">Clicky Game</a>
            </li>
            <li>
                Click an image to begin!
            </li>
            <li>
                Score: {props.score} | Top Score: {props.topScore}
            </li>
        </ul>
    </nav>
}

export default Navbar;