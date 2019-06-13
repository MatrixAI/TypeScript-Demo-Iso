import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// need to demonstrate the usage of the query context by using the context

function Home (props) {
  return (
    <React.Fragment>
      <Header />
      <p>Home Page</p>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
