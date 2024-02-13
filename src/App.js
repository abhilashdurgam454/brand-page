import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
    <nav className='box'>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
      
      <ul className='header'>

       <li href="#">HOME</li>
       <li href="#">LOCATION</li>
       <li href="#">ABOUT</li>
       <li href="#">CONTACT</li>

      </ul>
       
       <button className=' right'>login</button>
    </nav>
    </div>
  );
}
