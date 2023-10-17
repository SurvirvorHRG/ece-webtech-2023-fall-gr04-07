import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contacts = () => {
  return (
    <div>
      <Header />
      <h1 className="wt-title">Contact Us</h1>
      <form className="block">
        <div>
          <label>
            <span>First name</span>
            <input type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
        <div>
        </div>
          <label>
            <span>Message</span>
            <textarea name="message" />
          </label>
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contacts;
