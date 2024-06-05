import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import headphone from '../assets/images/headphone.svg'
function BottomNavbar() {
    const [showLinks, setShowLinks] = useState(false);
  
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
  
  return (
    <div>
       <div className="bottom__navbar">
      <div className="input">
       <select className='select' name="" id="">
        <option value="Browse All Categories">Browse All Categories</option>
        <option value="Browse All Categories">Browse All Categories</option>
        <option value="Browse All Categories">Browse All Categories</option>
       </select>
      </div>
      <div className="b__menu">
      <button className="sidebar-toggle" onClick={toggleLinks}>
          ☰
        </button>
        <ul  className={`nav-links ${showLinks ? 'show' : ''}`}>
          <li className=''>Deals</li>
          <li><NavLink to={"/"}> Home</NavLink></li>
          <li>About</li>
          <li>Shop</li>
          <li>Vendors</li>
          <li>Mega menu</li>
          <li>Blog</li>
          <li><NavLink to={"/admin"}>Admin</NavLink></li>
          <li><NavLink to={"/login"}>Login</NavLink></li>
        </ul>
      </div>
      <div className="bottom__navbar__support">
       <img src={headphone} alt="support" width={36}/>
       <p className='support__text'>1900 - 888 <br /> <span className='support__span'>24/7 Support Center</span></p>
      </div>
    </div>
    </div>
  )
}

export default BottomNavbar
