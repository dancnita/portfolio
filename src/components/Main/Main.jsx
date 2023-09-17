import React from 'react';
import Profile from '../Profie/Profile';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

//section container?
const Main = () => {
  return (
    <main>
      <Profile />
      <About />
      <Projects />
      <Contact id='Contact' />
    </main>
  );
};

export default Main;
