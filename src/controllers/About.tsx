import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dummies from '@matrixai/components/Dummies';

function About (props) {
  return (
    <React.Fragment>
      <Header />
      <p>About Page</p>
      <Dummies />
      <Footer />
    </React.Fragment>
  );
}

export default About;
