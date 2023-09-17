import React from 'react';
import Image from '../Image/Image';
import Parag from '../Parag/Parag';
import Container from '../Container/Container';
import Button from '../Button/Button';
import SectionContainer from '../SectionContainer/SectionContainer';
import './profile.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { contact } from '../../utils/data';
import Link from '../Link/Link';
import * as Scroll from 'react-scroll';
const LinkX = Scroll.Link;
const Profile = () => {
  return (
    <SectionContainer className='profile-container'>
      <Image src={`./dcn1.png`} alt='profile' />
      <Container>
        <Parag text={`hi!, I'm`} className={`text-bold`} />
        <h1 className='title'>Dan Nita</h1>
        <Parag
          text={`Junior Frontend Developer`}
          className={`text-bold text-larger`}
        />
        <>
          <Link
            href='./downFiles/CV-DCN-2023en4.pdf'
            download='CV-DCN'
            target='_blank'
          >
            <Button text='Download CV' className='btn btn-color2' />
          </Link>
          <LinkX to={`Contact`} smooth={true}>
            <Button text='Contact' className='btn btn-color1' />
          </LinkX>
        </>
        <Container>
          <Link href={contact.github} target='_blank'>
            <AiFillGithub className='icon' />
          </Link>
          <Link href={contact.linkedin} target='_blank'>
            <AiFillLinkedin className='icon' />
          </Link>
        </Container>
      </Container>
    </SectionContainer>
  );
};

export default Profile;
