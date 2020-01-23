/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

// eslint-disable-next-line require-jsdoc
function Image({
  id,
  shake,
  image,
  onClick
}) {
  return (
    <div
      role='img'
      data-id={id}
      aria-label='click item'
      className={shake ? 'click-item shake' : 'click-item'}
      style={{backgroundImage: `url(${image})`}}
      onClick={onClick}
    >
    </div>
  );
}

export default Image;
