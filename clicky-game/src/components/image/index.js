import React from 'react';
import './style.css';

function Image(props) {
  return (
    <div
      role="img"
      dataId={props.id}
      aria-label="click item"
      className="click-item shake"
      style={{backgroundImage: `url(${props.image})`}}
    >
    </div>
  );
}

export default Image;
