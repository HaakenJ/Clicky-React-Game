import React from './node_modules/react';
import './style.css';

// eslint-disable-next-line require-jsdoc
function Image(props) {
  return (
    <div
      role='img'
      data-id={props.id}
      aria-label='click item'
      className={props.shake ? 'click-item shake' : 'click-item'}
      style={{backgroundImage: `url(${props.image})`}}
      onClick={props.onClick}
    >
    </div>
  );
}

export default Image;
