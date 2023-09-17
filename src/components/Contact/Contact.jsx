import React from 'react';
import HeadingH2 from '../HeadingH2/HeadingH2';
import Container from '../Container/Container';
import Parag from '../Parag/Parag';
import './contact.css';
import { GrMail } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';
import { contact } from '../../utils/data';
import SectionContainer from '../SectionContainer/SectionContainer';
import NavBar from '../NavBar/NavBar';
import { Element } from 'react-scroll';
import Link from '../Link/Link';

const Contact = () => {
  return (
    <Element id='Contact'>
      <SectionContainer className={`contact`}>
        <HeadingH2 text={contact.title} />

        <Container className={`contact-container`}>
          <Parag
            text={contact.email}
            icon={<GrMail className={`contact-icon`} />}
          />
          <Link
            text={`Linkedin`}
            href={contact.linkedin}
            target={`_blank`}
            icon={<AiFillLinkedin className={`contact-icon`} />}
          />
        </Container>
        <NavBar className={`contact-nav`} navClassName={`nav-ul-contact`} />
      </SectionContainer>
    </Element>
  );
};

export default Contact;
