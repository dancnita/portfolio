import React from 'react';
import './link.css';

const Link = ({ text, href, children, download, target, className, icon }) => {
  return (
    <a
      icon={icon}
      href={href}
      download={download}
      target={target}
      className={className}
    >
      {icon}
      {text}
      {children}
    </a>
  );
};

export default Link;
