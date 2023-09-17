import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const ParagAndIcon = ({ text, icon }) => {
  return (
    <p>
      {icon}
      {text}
    </p>
  );
};

export default ParagAndIcon;
