import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const MyForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login form</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;