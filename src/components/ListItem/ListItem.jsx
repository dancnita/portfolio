import React from 'react';
//import Link from '../Link/Link';

const ListItem = ({ text, href, children }) => {
  return (
    <li>
      {/* <Link text={text} href={href} /> */}
      {children}
    </li>
  );
};

export default ListItem;
