import React from "react";
import "./style.css";

function Image(props) {
    return (
        <div
          role="img"
          aria-label="click item"
          className="click-item"
          style={{backgroundImage: `url(${props.image})`}}
        >
        </div>
    )
}