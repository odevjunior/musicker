import React from 'react';
import './style.css';

export default ({
  // eslint-disable-next-line react/prop-types
  name, id, placeholder, className, type,
}) => (
  <div id={`inputComponent-${id}`} className="inputComponent">
    <input type={type} className={className} placeholder={placeholder} name={name} id={id} />
  </div>
);
