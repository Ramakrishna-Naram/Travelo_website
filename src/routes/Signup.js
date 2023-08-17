import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutimg from "../images/img-8.jpg";
import Footer from "../components/Footer";
import Login from "../components/Login";
import "./signupstyle.css";
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import React,{useState} from "react";


function Signup (){
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleSignupClick = () => {
        setShowLogin(false);
    };
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid"
    heroImg={Aboutimg}
    title="Signup"
    btnClass="hide"/>
        
    <center>
    
            
            <div className="btn">
                <h1>Welcome to our website!</h1>
                <button className="log-btn" onClick={handleLoginClick}>Login</button>
                <button className="sign-btn" onClick={handleSignupClick}>Signup</button>
            </div>
            

            {showLogin ? (
                <div>
                    
                    { <center>
    <div className="form-container"><div className="login-btn">
        <h1>Login page</h1>
         <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
           

            </form> 
            <button>Submit</button>
            </div>
            </div>
            </center>}
                </div>
                
            ) : (
                <div>
                    
                    { <center>
    <div className="form-container">
    <div className="login-btn">
        <h1>sign up page</h1>
         <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Address" />

            </form> 
            <button>Submit</button>
            </div>
            </div>
            </center>}
                </div>
                

              )}
              
   
    </center>
   
    
    <Footer />
        </>
    );
    }
    
    export default Signup;