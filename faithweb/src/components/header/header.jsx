import React from 'react'
import "./header.css";


const Header = () => {
  return (
    <div className="header">
       <div className="logo-head">
       <img src="" alt="" />
        <h2 className="logo">ME TIME</h2>
       </div>
        <ul className="header-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
        </ul>
        
    </div>
  )
}

export default Header;