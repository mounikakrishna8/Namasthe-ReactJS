import React from 'react';
import "../../assets/Logo.png";
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src= 'Logo.png'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>AboutUs</li>
                <li>ContactUs</li>
                <li>cart</li>
            </ul>

        </div>
    </div>

  );
}
