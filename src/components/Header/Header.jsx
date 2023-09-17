import React, { useState } from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import './header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container className='header-container'>
      <Logo className='logo' />

      <Container>
        {!showMenu ? (
          <GiHamburgerMenu
            className={`burger-menu`}
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <AiOutlineClose
            className={`burger-menu`}
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
        <NavBar
          className={showMenu === false ? `nav-bar` : `nav-bar-show`}
          onClick={() => setShowMenu(!showMenu)}
          navClassName={'nav-ul'}
        />
      </Container>
    </Container>
  );
};

export default Header;
