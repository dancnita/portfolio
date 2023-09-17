import React from 'react';
import ListUnor from '../ListUnor/ListUnor';
import './navBar.css';
import { navLinks } from '../../utils/data';
import * as Scroll from 'react-scroll';

const LinkX = Scroll.Link;

//

const NavBar = ({ className, onClick, navClassName }) => {
  return (
    <nav className={className}>
      <ListUnor className={navClassName} data={navLinks}>
        <LinkX to={`destination`} smooth={true} offset={-50} onClick={onClick}>
          Name
        </LinkX>
      </ListUnor>
    </nav>
  );
};

export default NavBar;
