import React from 'react';
import "./contactformstyle.css";

const Contactform = () => {
  return (
    <center>
    <div className='form-container'> 
    <h1>Send a Compaint to us</h1>
      <form>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Subject'/>
        <textarea placeholder='Message' rows="4" />
        <button>Send Message</button>
      </form>
    </div>
    </center>
  )
}

export default Contactform
