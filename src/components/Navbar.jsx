import React from 'react'
import Topnavbar from './Topnavbar'
import logo from '../assets/images/logo.svg'
import compare from '../assets/images/recycle.svg'
import like from '../assets/images/like.svg'
import cart from '../assets/images/cart.svg'
import profile from '../assets/images/profile.svg'
import location from '../assets/images/location.svg'
import BottomNavbar from './BottomNavbar'
function Navbar() {
  return (
    <div>
      <Topnavbar/>
      <div className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='navbar__search'>
            <input className='search__input' type="search" placeholder='Search for items here'  />
        </div>
        <div className='navbar__icons'>
            <button className='btn'>   <img src={location} alt="location" />  Your location</button>
            <p className='icons__text'><img src={compare} alt="compare" /> Compare</p>
            <p className='icons__text'><img src={like} alt="like" /> Wishlist</p>
            <p className='icons__text'><img src={cart} alt="cart" /> Cart</p>
            <p className='icons__text'><img src={profile} alt="profile" /> Profile</p>
        </div>
      </div>
      <BottomNavbar/>
    </div>
  )
}

export default Navbar
