import React from 'react';
import "./Loginstyle.css";

const Logindata = () => {
  return (
    <center>
    <div className="form-container">
        <h1>submit your details</h1>
         <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Address" />

            </form> 
            <button>Submit</button>
            </div>
            </center>
  )
}

export default Logindata