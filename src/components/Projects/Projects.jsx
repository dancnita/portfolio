import React from 'react';
import Container from '../Container/Container';
import HeadingH2 from '../HeadingH2/HeadingH2';
import ListUno from '../ListUnor/ListUnor';
import Card from '../Card/Card';
import { projects } from '../../utils/data';
import SectionContainer from '../SectionContainer/SectionContainer';
//import Image from '../Image/Image';
import './project.css';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element id='Projects'>
      <SectionContainer className={`projects`}>
        <HeadingH2 text={`Recent Projects`} />
        <Container className='projects-container'>
          {projects.map((proj, i) => (
            <Card
              classNameContainer='project-container'
              data={proj}
              key={i}
              classNameImage={`project-img`}
              classNameBtn1={
                proj.liveLink === '' ? `display-none` : `btn btn-color2`
              }
              classNameBtn2={`btn btn-color1`}
              btn1Text={`Live Demo`}
              btn2Text={`Git`}
              classNameBtnContainer={`card-btn-container`}
            />
          ))}
        </Container>
      </SectionContainer>
    </Element>
  );
};

export default Projects;
