import React from 'react';
import ListItem from '../ListItem/ListItem';

//import { navLinks } from '../../utils/data';

const ListUnor = ({ className, data, children }) => {
  return (
    <ul className={className}>
      {/* {console.log(children)} */}
      {data.map((item, i) => (
        <ListItem key={i} text={item.title}>
          {React.cloneElement(children, {
            text: item.title,
            to: item.link,
            children: item.title,
          })}
        </ListItem>
      ))}
    </ul>
  );
};

export default ListUnor;
