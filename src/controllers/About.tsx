import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home (props) {
  return (
    <React.Fragment>
      <Header />
      <p>About Page</p>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
