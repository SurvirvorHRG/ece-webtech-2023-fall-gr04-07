import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyForm = function() {
    const onSubmit = function(e) {
    console.log("hhh")
      e.preventDefault()
      const data = new FormData(e.target)
      console.log(data)
    }
    return (
      <form onSubmit={onSubmit}>
        <h2>My form</h2>
        <div>
          <input
            type="text"
            name="my_input"
          />
        </div>
        <div>
          <button type ="submit">Submit</button>
        </div>
      </form>
    )
  }

  export default MyForm;