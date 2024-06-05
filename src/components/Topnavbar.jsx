import React from 'react'
import './Navbar.css'
function Topnavbar() {
  return (
    <div className='topnavbar'>
      <div>
        <ul className='menu'>
            <li className='menu__text'>About us</li>
            <li className='menu__text'>My Account</li>
            <li className='menu__text'>Wishlist</li>
            <li className='menu__text'>Order Tracking</li>
        </ul>
      </div>
      <div>
     <p className='topnavbar__text'>Need help? Call Us: <span className='topnavbar__span'>1800 900</span>   English   USD</p>
      </div>
    </div>
  )
}

export default Topnavbar
