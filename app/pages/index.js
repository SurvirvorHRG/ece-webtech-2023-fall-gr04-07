import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="wt-title">Welcome to My Blog!</h1>
      {/* Content for the home page */}
      <Footer />
    </div>
  );
};

export default Home;
