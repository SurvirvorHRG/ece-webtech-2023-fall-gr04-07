import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function countState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Footer />
    </div>
  );
}