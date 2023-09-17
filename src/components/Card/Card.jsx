import React from 'react';
import Container from '../Container/Container';
import Image from '../Image/Image';
import Button from '../Button/Button';
import Heading3 from '../Heading3/Heading3';
import Link from '../Link/Link';

const Card = ({
  classNameContainer,
  classNameImage,
  data,
  classNameBtn1,
  classNameBtn2,
  classNameBtnContainer,
  btn1Text,
  btn2Text,
}) => {
  return (
    <Container className={classNameContainer}>
      <Heading3 text={data.title} />
      <Image src={data.src} alt={data.alt} className={classNameImage} />

      <Container className={classNameBtnContainer}>
        <Link target={`_blank`} href={data.liveLink}>
          <Button className={classNameBtn1} text={btn1Text} />
        </Link>

        <Link target={`_blank`} href={data.githubLink}>
          <Button className={classNameBtn2} text={btn2Text} />
        </Link>
      </Container>
    </Container>
  );
};

export default Card;
