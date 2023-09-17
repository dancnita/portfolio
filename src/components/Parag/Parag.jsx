import React from 'react';
import './parag.css';

const Parag = ({ text, className, icon }) => {
  return (
    <p className={className}>
      {icon}
      {text}
    </p>
  );
};

export default Parag;
