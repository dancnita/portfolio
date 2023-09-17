import React from 'react';
import Image from '../Image/Image';
import dcnLogo from '../../assets/dcn_logo1.svg';

const text = '<{dcn}/>';

const Logo = ({ className }) => {
  return (
    <>
      <Image src={dcnLogo} alt='logo' className={className} />
      {/* <h2>{text}</h2> */}
    </>
  );
};

export default Logo;
