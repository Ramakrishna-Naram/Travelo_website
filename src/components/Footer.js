import React from 'react';
import "./Footerstyle.css";

const Footer = () => {
  return (
    <div className='footer'>
     <div className='top'>
<div>
    <h1>Travelo</h1>
    <p>Choose Your Favourite Destination.</p>
</div>
<div>
    <a href='/'>
        <i className='fa-brands fa-facebook-square'></i>
    </a>
    <a href='/'>
        <i className='fa-brands fa-instagram-square'></i>
    </a>
    <a href='/'>
        <i className='fa-brands fa-behance-square'></i>
    </a>
    <a href='/'>
        <i className='fa-brands fa-twitter-square'></i>
    </a>
</div>

     </div>
     <div className='bottom'>
        <div>
            <h4>Project</h4>
            <a href='/'>Changelog</a>
            <a href='/'>Status</a>
            <a href='/'>License</a>
            <a href='/'>All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href='/'>GItHub</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>Twitter</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href='/'>Suppport</a>
            <a href='/'>Troubleshoot</a>
            <a href='/'>Contact us</a>
        </div>
        <div>
            <h4>Others</h4>
            <a href='/'>Terms of Service</a>
            <a href='/'>Licesnse</a>
            <a href='/'>Privacy policy</a>
            
        </div>
     </div>

    </div>
  )
}

export default Footer
