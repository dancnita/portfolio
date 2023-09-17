import React from 'react';
import HeadingH2 from '../HeadingH2/HeadingH2';
import Container from '../Container/Container';
import Parag from '../Parag/Parag';
import { BsPatchCheckFill } from 'react-icons/bs';
import { PiCertificateDuotone } from 'react-icons/pi';
import ListUno from '../ListUnor/ListUnor';
import './about.css';
import Heading3 from '../Heading3/Heading3';
import { skills, education } from '../../utils/data';
import { Element } from 'react-scroll';
import { FaUserAlt } from 'react-icons/fa';

const About = () => {
  return (
    <Element id='About'>
      <section>
        <HeadingH2 text={`About Me`} />

        <Container className='about-container'>
          <Container className='about-details-container flex-column'>
            <Heading3 text={`Skills`} />
            <ListUno data={skills} className='about-list-skills'>
              <Parag icon={<BsPatchCheckFill className='about-list-icon' />} />
            </ListUno>
          </Container>

          <Container>
            <Container className='about-details-container'>
              <Parag
                icon={<FaUserAlt className='about-list-icon' />}
                className='about-text description'
                text={`I'm a junior developer based in Cluj, Romania who has recently found a
          deep passion about coding (science based background) and developing
          web applications like this one.`}
              />
            </Container>

            <Container className='about-details-container education flex-column'>
              <Heading3 text={`Education`} />
              <ListUno data={education} className='about-list'>
                <Parag
                  className='about-text'
                  icon={<PiCertificateDuotone className='about-list-icon' />}
                />
              </ListUno>
            </Container>
          </Container>
        </Container>
      </section>
    </Element>
  );
};

export default About;
